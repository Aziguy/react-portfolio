import { readFile, readdir, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import sharp from 'sharp';

const ASSETS_DIR = new URL('../src/assets/', import.meta.url).pathname.replace(/^\/(\w:)/, '$1');

const RULES = [
  { match: /^me\.png$/i, width: 900, format: 'png' },
  { match: /^me-about\.jpg$/i, width: 880, format: 'jpeg' },
  { match: /\.(jpe?g)$/i, width: 240, format: 'jpeg' },
  { match: /\.png$/i, width: 320, format: 'png' },
];

const encode = (pipeline, format) =>
  format === 'jpeg'
    ? pipeline.jpeg({ quality: 82, mozjpeg: true })
    : pipeline.png({ compressionLevel: 9, palette: true });

const format = (bytes) => `${(bytes / 1024).toFixed(0)} kB`;

const run = async () => {
  const files = await readdir(ASSETS_DIR);
  let saved = 0;

  for (const file of files) {
    if (!['.png', '.jpg', '.jpeg'].includes(extname(file).toLowerCase())) continue;

    const rule = RULES.find(({ match }) => match.test(file));
    if (!rule) continue;

    const path = join(ASSETS_DIR, file);
    // Lecture en mémoire : sharp garde le fichier source ouvert et empêcherait
    // la réécriture sur place sous Windows.
    const source = await readFile(path);
    const before = source.length;

    const optimized = await encode(
      sharp(source).resize({ width: rule.width, withoutEnlargement: true }),
      rule.format,
    ).toBuffer();

    if (optimized.length >= before) {
      console.log(`= ${file} (déjà optimisé, ${format(before)})`);
      continue;
    }

    await writeFile(path, optimized);
    saved += before - optimized.length;
    console.log(`✓ ${file} ${format(before)} → ${format(optimized.length)}`);
  }

  console.log(`\nTotal économisé : ${format(saved)}`);
};

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
