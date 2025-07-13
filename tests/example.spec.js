const { test, expect } = require('@playwright/test');

test('Check the header', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle('Google');
});