import { test, expect } from "@playwright/test";
import { BASEURL } from "./utils/config";

test.beforeEach(async ({ page }) => {
  await page.goto(`${BASEURL}projects`);
});

test.describe("Route", () => {
  test("Navigation", async ({ page }) => {
    await expect(page).toHaveURL(`${BASEURL}projects`);
  });

  test("Title", async ({ page }) => {
    await expect(page).toHaveTitle("Mackenzie Mittereder");
  });
});

const projectList = [
  "Mittereder.com",
  "Gradez",
  "Franklin Regional",
  "Life Counter",
  "Frame It",
  "Cuz",
  "Fast Movie Photos",
  "Graph Game",
  "Words and Music",
  "Vehicle App",
  "Rock Paper Scissors",
  "Pinball Price",
];

test.describe("Content", () => {
  projectList.forEach((projectName) => {
    test(`Project Displays - ${projectName}`, async ({ page }) => {
      await expect(await page.getByText(projectName).isVisible()).toBeTruthy();
    });
  });
});

test.describe("Functionality", () => {
  projectList.forEach((projectName) => {
    test(`Project Clickable - ${projectName}`, async ({ page }) => {
      await page.getByText(projectName).click();
      await expect(
        await page.getByText(projectName, { exact: true }).isVisible()
      ).toBeTruthy();
    });
  });
});
