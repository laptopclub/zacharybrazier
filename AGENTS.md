# Zachary Brazier agent guide

This is a client site built on Laptop Club Foundation.

## Voice and content

- Zachary is a chef focused on seasonal private dining, collaborations and hospitality projects.
- Keep copy warm, polished and concise.
- Placeholder content and imagery are acceptable until Zachary provides final assets.

## Boundaries

- Keep Zachary-specific styling and composition in this repository.
- Reusable schemas, blocks or framework fixes belong upstream in `laptopclub/foundation`.
- Do not copy or edit code inside installed Foundation packages.
- Add site-specific schemas in `sanity/schema-types.ts`.
- Add site-specific renderers in `lib/blocks.ts`.
- Never commit `.env` files, package tokens, Sanity tokens or webhook secrets.
- Do not hand-edit `sanity.types.ts` or `schema.json`.
- Do not add dependencies without approval.

## Required checks

```bash
pnpm check
pnpm build
```

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
