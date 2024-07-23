import { DateTime } from "luxon";

function dtStr(dt?: DateTime | null): string {
	return (dt ?? DateTime.local()).toFormat("yyyy-MM-dd HH:mm:ss ZZZ");
}

function dtStrFile(dt?: DateTime | null): string {
	return (dt ?? DateTime.local()).toFormat("yyyyMMddHHmmss");
}

export { dtStr, dtStrFile };
