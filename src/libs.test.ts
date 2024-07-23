import { describe, expect, test } from "bun:test";
import { DateTime } from "luxon";
import { dtStr, dtStrFile } from "./libs";

describe("dtStr", () => {
	test("should return the formatted date string when a DateTime object is provided", () => {
		const dt = DateTime.fromISO("2022-01-01T12:00:00Z");
		const expected = "2022-01-01 12:00:00 +0000";
		const result = dtStr(dt);
		expect(result).toBe(expected);
	});

	test("should return the formatted date string when a null value is provided", () => {
		const dt = null;
		const expected = DateTime.local().toFormat("yyyy-MM-dd HH:mm:ss ZZZ");
		const result = dtStr(dt);
		expect(result).toBe(expected);
	});

	test("should return the formatted date string when an undefined value is provided", () => {
		const dt = undefined;
		const expected = DateTime.local().toFormat("yyyy-MM-dd HH:mm:ss ZZZ");
		const result = dtStr(dt);
		expect(result).toBe(expected);
	});
});

describe("dtStrFile", () => {
	test("should return the formatted date string when a DateTime object is provided", () => {
		const dt = DateTime.fromISO("2022-01-01T12:00:00Z");
		const expected = "20220101120000";
		const result = dtStrFile(dt);
		expect(result).toBe(expected);
	});

	test("should return the formatted date string when a null value is provided", () => {
		const dt = null;
		const expected = DateTime.local().toFormat("yyyyMMddHHmmss");
		const result = dtStrFile(dt);
		expect(result).toBe(expected);
	});

	test("should return the formatted date string when an undefined value is provided", () => {
		const dt = undefined;
		const expected = DateTime.local().toFormat("yyyyMMddHHmmss");
		const result = dtStrFile(dt);
		expect(result).toBe(expected);
	});
});
