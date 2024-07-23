import { describe, expect, test } from "bun:test";
import { testClient } from "hono/testing";
import app, { type AppType } from "./app";

describe("App", () => {
	test("/(index)", async () => {
		const client = testClient<AppType>(app);
		const res = await client.index.$get();
		expect(await res.text()).toStartWith(
			'<html lang="en"><head><title>Hello Hono!</title></head><body><h1>Hello Hono!</h1><p><a href="download">click here</a></p><p>',
		);
	});
	test("/search", async () => {
		const client = testClient<AppType>(app);
		const res = await client.search.$get();
		expect(await res.json()).toEqual({ hello: "world" });
	});
});
