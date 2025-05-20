import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

test("test wikipedia", async ({ page }) => {
  await page.goto("https://www.wikipedia.org/");
  await page.getByRole("searchbox", { name: "Search Wikipedia" }).click();
  await page
    .getByRole("searchbox", { name: "Search Wikipedia" })
    .fill("microsoft");
  await page.getByRole("button", { name: "Search" }).click();
  await expect(page.getByText("fondée en 1975 par Bill Gates")).toBeVisible();
});
