import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

/** @param {import('@playwright/test').Page} page */
const scan = (page) =>
  new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();

test.describe('accessibilité', () => {
  test('ne présente aucune violation WCAG A/AA en thème sombre', async ({ page }) => {
    await page.goto('/');
    const { violations } = await scan(page);
    expect(violations.map((violation) => violation.id)).toEqual([]);
  });

  test('ne présente aucune violation WCAG A/AA en thème clair', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /changer de thème|toggle theme/i }).click();

    const { violations } = await scan(page);
    expect(violations.map((violation) => violation.id)).toEqual([]);
  });

  test('expose un lien d’évitement au premier tabulation', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Pas de navigation clavier sur mobile');

    await page.goto('/');
    await page.keyboard.press('Tab');

    await expect(page.locator('.skip-link')).toBeFocused();
  });
});
