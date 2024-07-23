import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto(""); // use.baseURL in playwright.config.ts
	await page.waitForLoadState("load");
});

test("has title", async ({ page }) => {
	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle("Hello Hono!");
});

test("CSV Download", async ({ page }) => {});

// async function expectCounterValue(
// 	button: Locator,
// 	expectedCount: number,
// 	timeout = 1000,
// ) {
// 	await expect(async () => {
// 		const text = await button.textContent();
// 		// console.log(text);
// 		expect(text).toBe(`count is ${expectedCount}`);
// 	}).toPass({ timeout });
// }

// test("click counter", async ({ page }) => {
// 	const btn1 = page.getByRole("button", { name: "count is" });

// 	expect(btn1).toHaveText("count is 0");

// 	// await btn1.click();
// 	// expect(btn1).toHaveText("count is 1");

// 	for (let i = 1; i <= 10; i++) {
// 		await btn1.click();
// 		await expectCounterValue(btn1, i);
// 	}
// });
