const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

const root = process.cwd();
const mdPath = path.join(root, "docs", "SUBMISSION_COMPLETE_FOR_PDF.md");
const outPath = path.join(root, "docs", "SUBMISSION_COMPLETE_FOR_PDF.html");

const md = fs.readFileSync(mdPath, "utf8");
const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Chama Connect QA/Bug Bounty #1</title>
    <style>
      body { font-family: Arial, Helvetica, sans-serif; margin: 28px; line-height: 1.45; color: #111; }
      h1, h2, h3 { color: #0f172a; page-break-after: avoid; }
      table { border-collapse: collapse; width: 100%; margin: 12px 0; }
      th, td { border: 1px solid #cbd5e1; padding: 8px; vertical-align: top; }
      code, pre { background: #f8fafc; }
      pre { padding: 10px; overflow: auto; border: 1px solid #e2e8f0; }
      hr { border: 0; border-top: 1px solid #cbd5e1; margin: 20px 0; }
    </style>
  </head>
  <body>
    ${marked.parse(md)}
  </body>
</html>`;

fs.writeFileSync(outPath, html, "utf8");
console.log(`Wrote ${outPath}`);
