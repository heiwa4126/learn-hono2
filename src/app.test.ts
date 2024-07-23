import { beforeEach, describe, expect, test } from "bun:test";
import { testClient } from "hono/testing";
import app from "./app";

describe("App", () => {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	let client: any;

	beforeEach(async () => {
		client = await testClient(app);
	});

	test("/(root)", async () => {
		const res = await client.$get();
		expect(await res.text()).toStartWith(
			'<html lang="en"><head><title>Hello Hono!</title></head><body><h1>Hello Hono!</h1><p><a href="download">click here</a></p><p>',
		);
	});
	test("/search", async () => {
		const res = await client.search.$get();
		expect(await res.json()).toEqual({ hello: "world" });
	});
});
