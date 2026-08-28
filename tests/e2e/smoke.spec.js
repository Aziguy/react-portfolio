import { expect, test } from '@playwright/test';

const SECTIONS = [
  'hero',
  'about',
  'skills',
  'projects',
  'services',
  'certifications',
  'testimonials',
  'contact',
];

test.describe('page d’accueil', () => {
  test('affiche le héros et toutes les sections', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Hippolyte Kengni');
    for (const id of SECTIONS) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });

  test('sert le contenu dans le HTML sans exécuter JavaScript', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Hippolyte Kengni');
    await expect(page.locator('#projects')).toContainText("Jose's Cuisine");
    await context.close();
  });

  test('expose des données structurées valides', async ({ page }) => {
    await page.goto('/');
    const raw = await page.locator('#structured-data').textContent();
    const graph = JSON.parse(raw ?? '[]');

    expect(graph.map((/** @type {{ '@type': string }} */ entry) => entry['@type'])).toEqual([
      'WebSite',
      'Person',
      'ItemList',
    ]);
    expect(graph[1].name).toBe('Hippolyte Kengni');
    expect(graph[2].itemListElement.length).toBeGreaterThan(5);
  });

  test('ne produit aucune erreur console', async ({ page }) => {
    /** @type {string[]} */
    const errors = [];
    page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));
    page.on('pageerror', (error) => errors.push(error.message));

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    expect(errors).toEqual([]);
  });

  test('déclare les balises SEO essentielles', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://hippolytek.fr/',
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      /hippolytek\.fr\/preview\.jpg/,
    );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.{80,}/);
  });
});
