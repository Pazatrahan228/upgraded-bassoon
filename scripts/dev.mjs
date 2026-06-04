import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
const root = process.cwd();
const port = process.env.PORT || 3000;
const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
};
http
  .createServer(async (req, res) => {
    try {
      let pathname = new URL(req.url, "http://localhost").pathname;
      let file = pathname === "/" ? "/index.html" : pathname;
      let full = path.join(root, file);
      if (
        !file.includes(".") ||
        file.startsWith("/dashboard") ||
        file.startsWith("/cases") ||
        file.startsWith("/workspace") ||
        file.startsWith("/compare") ||
        file.startsWith("/treatment") ||
        file.startsWith("/report")
      )
        full = path.join(root, "index.html");
      const data = await readFile(full);
      res.writeHead(200, {
        "content-type": mime[path.extname(full)] || "text/plain",
      });
      res.end(data);
    } catch (e) {
      res.writeHead(404);
      res.end("Not found");
    }
  })
  .listen(port, () =>
    console.log(`Fresh Vibes DSD Studio running at http://localhost:${port}`),
  );
