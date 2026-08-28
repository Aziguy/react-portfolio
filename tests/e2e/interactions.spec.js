import { expect, test } from '@playwright/test';

test.describe('interactions', () => {
  test('bascule le thème et conserve la préférence', async ({ page }) => {
    await page.goto('/');
    const root = page.locator('html');
    const initial = await root.getAttribute('data-theme');

    await page.getByRole('button', { name: /changer de thème|toggle theme/i }).click();
    await expect(root).not.toHaveAttribute('data-theme', initial ?? 'dark');

    await page.reload();
    await expect(root).not.toHaveAttribute('data-theme', initial ?? 'dark');
  });

  test.describe('langue', () => {
    test.use({ locale: 'fr-FR' });

    test('bascule du français vers l’anglais', async ({ page }) => {
      await page.goto('/');
      await expect(page.locator('#about-title')).toHaveText('À propos');

      await page.getByRole('button', { name: /switch to english/i }).click();

      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
      await expect(page.locator('#about-title')).toHaveText('About');
    });
  });

  test.describe('détection automatique de la langue', () => {
    test.use({ locale: 'en-GB' });

    test('sert l’anglais à un navigateur anglophone', async ({ page }) => {
      await page.goto('/');
      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
      await expect(page.locator('#about-title')).toHaveText('About');
    });
  });

  test('filtre les projets par catégorie', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('#projects .project');
    const total = await cards.count();

    await page.getByRole('tab', { name: 'WordPress' }).click();

    const filtered = await cards.count();
    expect(filtered).toBeGreaterThan(0);
    expect(filtered).toBeLessThan(total);
    await expect(cards.first()).toContainText('WordPress');
  });

  test('refuse un formulaire de contact invalide', async ({ page }) => {
    await page.goto('/');
    await page.locator('#contact input[name="email"]').fill('adresse-invalide');
    await page.locator('#contact textarea[name="message"]').fill('Bonjour, ceci est un message de test suffisamment long.');
    await page.locator('#contact button[type="submit"]').click();

    await expect(page.locator('.contact__status--error')).toBeVisible();
  });

  test('met en avant la section active dans la navigation', async ({ page, isMobile }) => {
    test.skip(isMobile, 'La navigation haute est masquée sur mobile');

    await page.goto('/');
    await page.locator('#projects').scrollIntoViewIfNeeded();

    await expect(page.locator('.topbar__nav a[href="#projects"]')).toHaveAttribute(
      'aria-current',
      'true',
    );
  });

  test('parcourt les pages de certifications', async ({ page }) => {
    await page.goto('/');
    const firstTitle = await page.locator('#certifications .certification__title').first().textContent();

    await page.getByRole('button', { name: /page 2/i }).click();

    await expect(page.locator('#certifications .certification__title').first()).not.toHaveText(
      firstTitle ?? '',
    );
  });
});
