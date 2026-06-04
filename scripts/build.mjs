import { mkdir, cp, copyFile, rm } from "node:fs/promises";
await rm("dist", { recursive: true, force: true });
await mkdir("dist/src", { recursive: true });
await copyFile("index.html", "dist/index.html");
await cp("src", "dist/src", { recursive: true });
console.log("Built static Fresh Vibes DSD Studio to dist/");
