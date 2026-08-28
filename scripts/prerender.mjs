import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const distDir = join(root, 'dist');
const templatePath = join(distDir, 'index.html');

const { render } = await import(pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href);
const { html, structuredData } = render();

const template = await readFile(templatePath, 'utf8');

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Point de montage introuvable dans dist/index.html');
}

const output = template
  .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  .replace(
    '</head>',
    `  <script type="application/ld+json" id="structured-data">${structuredData}</script>\n  </head>`,
  );

await writeFile(templatePath, output, 'utf8');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://hippolytek.fr/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
await writeFile(join(distDir, 'sitemap.xml'), sitemap, 'utf8');

console.log(`Pré-rendu écrit : ${(output.length / 1024).toFixed(0)} kB de HTML statique`);
