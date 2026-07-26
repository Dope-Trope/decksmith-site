/**
 * DeckSmith build step.
 *
 * The site is plain HTML, CSS and images, so there is nothing to compile. This
 * script does two small jobs:
 *
 *   1. Stamps the stylesheet link with a hash of styles.css. Cloudflare edge
 *      caches CSS for hours, but index.html is served with max-age=0, so a
 *      changing query string is what makes a redeployed stylesheet take effect
 *      immediately. Skipping this step is safe: the hand-written ?v= value in
 *      index.html still works, it just has to be bumped manually.
 *   2. Copies public/ to dist/client, so a Cloudflare Pages project configured
 *      with a build command and an output directory of `dist/client` keeps
 *      working. If Pages is set to "no build command" with an output directory
 *      of `public`, this script never runs.
 */

import { cp, rm, mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "public");
const target = resolve(root, "dist/client");

await rm(resolve(root, "dist"), { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });

const css = await readFile(resolve(target, "styles.css"));
const hash = createHash("sha256").update(css).digest("hex").slice(0, 10);

const indexPath = resolve(target, "index.html");
const html = await readFile(indexPath, "utf8");
const stamped = html.replace(/\/styles\.css\?v=[^"]*/, `/styles.css?v=${hash}`);
await writeFile(indexPath, stamped);

console.log(`Copied ${source} -> ${target}`);
console.log(`Stamped styles.css?v=${hash}`);
