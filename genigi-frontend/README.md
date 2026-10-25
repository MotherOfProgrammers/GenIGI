# GenIGI Website

A standalone Next.js and TypeScript website for the GenIGI Project IGI modding community.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Check and build

```bash
npm run typecheck
npm run build
```

The production build is a static export in `out/`. You can deploy that folder to a static host.
An already-built copy of the site is included in `out/`.

The source uses Next.js, React, TypeScript, and plain CSS. It does not require third-party UI or animation libraries.
