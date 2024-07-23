import { Hono } from "hono";
import { DateTime } from "luxon";
import { dtStr, dtStrFile } from "./libs";

const app = new Hono();

const View = () => {
	const title = "Hello Hono!";
	return (
		<html lang="en">
			<head>
				<title>{title}</title>
			</head>
			<body>
				<h1>{title}</h1>
				<p>
					<a href="download">click here</a>
				</p>
				<p>{dtStr()}</p>
			</body>
		</html>
	);
};

const routes = app
	.get("/", (c) => c.html(<View />))
	.get("/search", (c) => c.json({ hello: "world" }))
	.get("/download", (c) => {
		const now = DateTime.local();
		const csvFileName = `test1-${dtStrFile(now)}.csv`;
		c.header("Content-Type", "text/csv");
		c.header("Content-Encoding", "UTF-8");
		c.header("Content-Disposition", `attachment; filename="${csvFileName}"`);
		return c.body(`filename,created_at\n${csvFileName},${dtStr(now)}\n`);
	});

export type AppType = typeof routes;
export default app;
