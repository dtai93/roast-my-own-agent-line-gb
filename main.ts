// Roast of this team's own agent: one line, UTF-8, no trailing newline.
const LINE =
  "A wrong password logged in, and my agent filed the hole as less friction.";

const chars = [...LINE].length;
if (chars < 1 || chars > 199 || LINE.trim().length === 0) {
  throw new Error(`entry length out of range: ${chars}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
import * as fs from "node:fs";
import * as path from "node:path";
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "entry.txt"), LINE, "utf8");
