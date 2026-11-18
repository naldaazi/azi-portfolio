# Project screenshots

Drop screenshots in this folder and they appear automatically. If a file is
missing, the page falls back to its built-in illustration — nothing breaks.

## The two kinds

| File name | Where it shows |
| --- | --- |
| `meeting-confirmation-automation.jpg` | Wide banner at the top of the case study (16:9) |
| `meeting-confirmation-automation-1.jpg` | Proof strip, thumbnail 1 |
| `meeting-confirmation-automation-2.jpg` | Proof strip, thumbnail 2 |
| `meeting-confirmation-automation-3.jpg` | Proof strip, thumbnail 3 |

Numbered files go into a 3-across **"Proof"** strip under the write-up and open
full size when clicked. Use `-1`, `-2`, `-3` … — they sort by number.

The slug must match the project exactly:

- `meeting-confirmation-automation`
- `operational-workflow-system`
- `inbox-management-system`
- `calendar-management-system`

`.jpg`, `.jpeg`, `.png` and `.webp` all work.

## The easy path for the Zap proof

Save the three Zapier screenshots as:

```
public/projects/meeting-confirmation-automation-1.jpg
public/projects/meeting-confirmation-automation-2.jpg
public/projects/meeting-confirmation-automation-3.jpg
```

That's it — no code changes.

## Good screenshots

- Blur or redact client names, emails, and phone numbers
- Show the system, not the conversation
- Under ~500 KB each keeps the site fast
- Long vertical Zaps are perfect for the proof strip (it crops to 3:4 from the top)

## After adding files

```bash
npm run build
git add . && git commit -m "Add project screenshots" && git push
```

Vercel redeploys automatically.
