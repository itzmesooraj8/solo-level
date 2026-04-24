import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const rootUrl = "http://localhost/";
const serverEntry = await import("../dist/server/index.js");
const worker = serverEntry.default;

if (!worker || typeof worker.fetch !== "function") {
  throw new Error("Server build entry does not expose a fetch handler.");
}

const response = await worker.fetch(new Request(rootUrl));
if (!response.ok) {
  throw new Error(`Failed to render shell HTML from server entry: ${response.status}`);
}

const html = await response.text();
const outputPath = resolve("dist/client/index.html");
await writeFile(outputPath, html, "utf8");

console.log(`Generated ${outputPath} for Capacitor sync.`);
