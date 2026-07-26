/**
 * DeckSmith build step.
 *
 * The site is plain HTML, CSS and images — there is nothing to compile. This
 * script exists only so that a Cloudflare Pages project configured with a build
 * command and an output directory of `dist/client` keeps working. If you set
 * the Pages project to "no build command" with an output directory of `public`,
 * this file is never run and can be ignored.
 */

import { cp, rm, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "public");
const target = resolve(root, "dist/client");

await rm(resolve(root, "dist"), { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });

console.log(`Copied ${source} -> ${target}`);
