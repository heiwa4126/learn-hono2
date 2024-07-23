import { type Response, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto(""); // use.baseURL in playwright.config.ts
	await page.waitForLoadState("load");
});

test("CSV download", async ({ page, context }) => {
	// レスポンスを監視するためのリスナーを設定
	let responsePromise: Promise<Response> | undefined;

	// Set up listener to monitor responses
	context.on("response", (response) => {
		if (response.url().includes("/download")) {
			// ↑ set your download url pattern here
			responsePromise = Promise.resolve(response);
		}
	});

	// ダウンロードを待機するPromiseを作成
	const downloadPromise = page.waitForEvent("download");

	await page.getByRole("link", { name: "click here" }).click();

	// ダウンロードイベントとレスポンスを待機
	const [download, response] = await Promise.all([
		downloadPromise,
		responsePromise,
	]);

	// Content-Dispositionヘッダを取得
	const contentDisposition = response?.headers()["content-disposition"];
	// console.log({ response });

	// ファイル名を抽出
	let filename = "unknown";
	if (contentDisposition) {
		const matches = /filename="?(.+)"?/i.exec(contentDisposition);
		if (matches?.[1]) {
			filename = matches[1].replace(/['"]/g, "");
		}
	}

	console.log(`Downloaded filename: ${filename}`);
	// TODO: check filename pattern here
	

});
