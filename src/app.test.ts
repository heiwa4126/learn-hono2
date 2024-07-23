import { describe, expect, test } from "bun:test";
import { testClient } from "hono/testing";
import app, { type AppType } from "./app";

const client = testClient<AppType>(app);

describe("App", () => {
	test("/(index)", async () => {
		const res = await client.index.$get();
		expect(await res.text()).toStartWith(
			'<html lang="en"><head><title>Hello Hono!</title></head><body><h1>Hello Hono!</h1><p><a href="download">click here</a></p><p>',
		);
	});
	test("/download", async () => {
		const res = await client.download.$get();
		expect(await res.text()).toStartWith("filename,created_at\n");
	});
	test("/search", async () => {
		const res = await client.search.$get();
		expect(await res.json()).toEqual({ hello: "world" });
	});
});
