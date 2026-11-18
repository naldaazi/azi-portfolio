# Project screenshots

Drop a screenshot in this folder and it appears automatically in the project
card on `/projects` and at the top of the case-study page. If a file is
missing, the card shows its built-in illustrative mock instead — nothing breaks.

## File names (the slug must match exactly)

| File | Project |
| --- | --- |
| `meeting-confirmation-automation.jpg` | Meeting Confirmation Automation |
| `operational-workflow-system.jpg` | Operational Workflow System |
| `inbox-management-system.jpg` | Inbox Management System |
| `calendar-management-system.jpg` | Calendar Management System |

`.png` and `.webp` work too — the lookup checks `webp`, `jpg`, `jpeg`, `png`.

## What makes a good one

- **Landscape**, roughly 1600×1000 or wider (they're cropped to 16:10 in the card)
- Blur or redact client names, email addresses, and phone numbers
- Screenshots of the *system* read best: a Zapier flow, a ClickUp board, a
  labelled inbox, a colour-coded week
- Under ~500 KB each keeps the site fast

## After adding files

```bash
npm run build   # regenerates the static pages
git add . && git commit -m "Add project screenshots" && git push
```

Vercel redeploys automatically.
