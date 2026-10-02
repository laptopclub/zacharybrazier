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
