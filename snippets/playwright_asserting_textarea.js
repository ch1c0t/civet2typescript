import { test, expect } from '@playwright/test';

test('textarea should have specific text', async ({ page }) => {
  await page.goto('https://example.com');
  // Assume the page has a <textarea id="my-textarea"></textarea>

  // First, fill the textarea with some text for the test case
  await page.locator('#my-textarea').fill('Hello Playwright users!');

  // Assertion 1: Check for the exact value
  await expect(page.locator('#my-textarea')).toHaveValue('Hello Playwright users!');

  // Assertion 2: Check using a regular expression (e.g., starts with 'Hello')
  await expect(page.locator('#my-textarea')).toHaveValue(/^Hello/);
});


import { test, expect } from '@playwright/test';

test('textarea should not be empty', async ({ page }) => {
  await page.goto('https://example.com');
  // Assume the page has a <textarea id="my-textarea"></textarea>

  // Fill the textarea (or the app logic does this)
  await page.locator('#my-textarea').fill('Some content is here.');

  // Retrieve the value first
  const value = await page.locator('#my-textarea').inputValue();

  // Assert that the retrieved value is not an empty string
  expect(value).toBeTruthy(); // This works for any non-empty string
});

