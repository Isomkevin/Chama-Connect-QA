# Chama Connect QA/Bug Bounty #1

**Proposal stub (GitHub)** — ChamaConnect Virtual Hackathon.

This repository is a **competition-grade QA / bug-bounty submission** for the live platform **chamaconnect.io**, with evidence and a **single PDF-ready** narrative.

## Where everything lives

| Document | Purpose |
|----------|---------|
| **`docs/SUBMISSION_COMPLETE_FOR_PDF.md`** | **Export this file to PDF** for judges — full bug write-ups (CCQA-001–010), filled testing environment, methodology, innovation (including ideas from **ChamaConnect 2.0**), evidence index. |
| **`docs/SUBMISSION_PDF_OUTLINE.md`** | Shorter outline + same structure (useful while editing). |
| **`docs/QA_EXECUTION_REPORT.md`** | Living execution log, Phase 2–3 notes, risk register, paste-ready closing narrative. |
| **`docs/QA_MASTER_TEST_PLAN.md`** | Phased methodology. |
| **`Evidence_Files/`** | Screen recording (`.mp4`) + `QA-*.png` / `QA-P2-*.png` stills. |
| **`Hackathon-Info-Session-transcripts`** | Organizer info session (Otter) — PDF format: bugs first, innovations second. |
| **`Hackathon_Details.md`** | Event brief; **PDF terms take precedence** over any other date or rule. |

## Official context (quick)

| Field | Value |
|--------|--------|
| **Submission title** | Chama Connect QA/Bug Bounty #1 |
| **Event** | Chama Connect Virtual Hackathon |
| **Theme** | `ChamaConnect: Refactored - Scaling the Circle` |
| **Product** | **chamaconnect.io** / **chamaconnect.co.ke** |
| **This repo** | Live-site QA, defect backlog, reproducible evidence, proposed fixes |
| **Companion build** | **`Chama-Connect-2-point-o`** (local path) — concept **ChamaConnect 2.0** admin + ICDMS/AI/audit ideas; innovations in the PDF reference that design where relevant |

## Cover placeholders (fill before export)

- **Participant name, email, public GitHub URL, submission timestamp** — replace bracketed fields at the top of **`docs/SUBMISSION_COMPLETE_FOR_PDF.md`**.

## How to generate the PDF

From the repo root (requires Node / npx):

```bash
npx --yes md-to-pdf docs/SUBMISSION_COMPLETE_FOR_PDF.md
```

Output defaults to **`docs/SUBMISSION_COMPLETE_FOR_PDF.pdf`**. If you use **Word / Google Docs**, paste the Markdown content from `SUBMISSION_COMPLETE_FOR_PDF.md` and export as PDF.
