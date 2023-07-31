import { test, expect } from "@playwright/test";
import { BASEURL } from "./utils/config";

test.beforeEach(async ({ page }) => {
  await page.goto(`${BASEURL}`);
});

test.describe("Route", () => {
  test("Navigation", async ({ page }) => {
    await expect(page).toHaveURL(`${BASEURL}`);
  });

  test("Title", async ({ page }) => {
    await expect(page).toHaveTitle("Mackenzie Mittereder");
  });
});

test.describe("Content", () => {
  test("Navbar", async ({ page }) => {
    await expect(
      await page.getByRole("link", { name: "Home" }).isVisible()
    ).toBeTruthy();
    await expect(
      await page.getByRole("link", { name: "Projects" }).isVisible()
    ).toBeTruthy();
    await expect(
      await page.getByRole("link", { name: "Github" }).isVisible()
    ).toBeTruthy();
    await expect(
      await page.getByRole("link", { name: "LinkedIn" }).isVisible()
    ).toBeTruthy();
  });

  test("Work Experience", async ({ page }) => {
    await expect(
      await page.getByText("Work Experience").isVisible()
    ).toBeTruthy();
    await expect(await page.getByText("Lexicon").isVisible()).toBeTruthy();
    await expect(await page.getByText("Dollar Bank").isVisible()).toBeTruthy();
    await expect(await page.getByText("aSa").isVisible()).toBeTruthy();
    await expect(
      await page.getByText("ATS Evolution").isVisible()
    ).toBeTruthy();
  });

  test("Eduction", async ({ page }) => {
    await expect(await page.getByText("Education").isVisible()).toBeTruthy();
    await expect(
      await page.getByText("Saint Vincent College").isVisible()
    ).toBeTruthy();
  });
});
