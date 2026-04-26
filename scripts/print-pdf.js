const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const { pathToFileURL } = require("url");

const root = process.cwd();
const htmlPath = path.join(root, "docs", "SUBMISSION_COMPLETE_FOR_PDF.html");
const pdfPath = path.join(root, "docs", "SUBMISSION_COMPLETE_FOR_PDF.pdf");

if (!fs.existsSync(htmlPath)) {
  console.error("Missing HTML. Run: npm run pdf:html");
  process.exit(1);
}

const candidates = [
  path.join(process.env["ProgramFiles(x86)"] || "", "Microsoft", "Edge", "Application", "msedge.exe"),
  path.join(process.env.ProgramFiles || "", "Microsoft", "Edge", "Application", "msedge.exe"),
];

const edge = candidates.find((p) => p && fs.existsSync(p));
if (!edge) {
  console.error("msedge.exe not found. Install Microsoft Edge or use npm run pdf (md-to-pdf).");
  process.exit(1);
}

const fileUrl = pathToFileURL(htmlPath).href;
const result = spawnSync(
  edge,
  ["--headless=new", "--disable-gpu", `--print-to-pdf=${pdfPath}`, fileUrl],
  { stdio: "inherit", shell: false }
);

if (result.status !== 0) {
  console.error("Edge print-to-pdf failed with exit", result.status);
  process.exit(result.status ?? 1);
}

if (!fs.existsSync(pdfPath)) {
  console.error("PDF was not created:", pdfPath);
  process.exit(1);
}

console.log("Wrote", pdfPath);
