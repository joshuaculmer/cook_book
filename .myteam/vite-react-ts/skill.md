---
name: "Vite + React + TypeScript"
description: "Load when working on this project's structure, imports, or conventions. Covers file layout, TypeScript config, and Vite-specific patterns."
---

This project is built with Vite, React, and TypeScript in strict mode.

**Directory layout:**
```
src/
  components/     # Reusable UI components
  pages/          # Route-level page components
  hooks/          # Custom React hooks
  types/          # Shared TypeScript types and interfaces
  utils/          # Pure utility functions
  assets/         # Static assets (images, fonts, etc.)
```

**Import conventions:**
- Use path aliases defined in `vite.config.ts` and `tsconfig.json` (e.g., `@/components/Button`).
- Prefer named exports over default exports for components and hooks.
- Group imports: external packages first, then internal aliases, then relative imports.

**TypeScript rules:**
- `strict: true` is enforced — no `any`, no implicit `any`.
- Use `interface` for object shapes; use `type` for unions and intersections.
- Avoid type assertions (`as X`) unless absolutely necessary — fix the types instead.
- Use `satisfies` when you want type checking without widening.

**Vite-specific patterns:**
- Environment variables must be prefixed with `VITE_` to be accessible in client code.
- Access them via `import.meta.env.VITE_MY_VAR`, not `process.env`.
- Use `import.meta.env.DEV` and `import.meta.env.PROD` for environment guards.
- Static assets in `public/` are served at the root; assets in `src/assets/` go through the bundler.

**Do not:**
- Do not use `require()` — use ES module `import` syntax.
- Do not import from `node_modules` using relative paths.
- Do not put component logic directly in page files — extract to `components/` or `hooks/`.
