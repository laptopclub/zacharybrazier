# Zachary Brazier

Chef portfolio site for zacharybrazier.com, built on the Laptop Club Foundation consumer stack.

- Framework: Next.js, Sanity, Tailwind and Foundation packages
- Production URL: https://zacharybrazier.com
- Local site: http://localhost:3334
- Studio: http://localhost:3334/studio

## Setup

A GitHub token with `read:packages` access is required for the private `@laptopclub/*` packages.

```bash
npm login --scope=@laptopclub --auth-type=legacy --registry=https://npm.pkg.github.com
pnpm install
cp .env.example .env.local
pnpm dev
```

## Validation

```bash
pnpm check
pnpm build
```

## Deployment notes

Vercel stores `NPM_TOKEN` for installing Foundation packages. Sanity settings are provided through environment variables. Do not commit `.env` files, API tokens or webhook secrets.
