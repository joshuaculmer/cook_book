---
name: "Root"
description: "Root role for this web development harness. Provides entry point for all roles and skills."
---

This is the root of the web development agent harness for Vite + React + TypeScript projects.

**Available roles:**
- `web-dev` — the web development team orchestrator, with sub-roles for each discipline.

**Available skills:**
- `vite-react-ts` — project structure, import conventions, and TypeScript rules.
- `tailwind` — Tailwind CSS styling patterns.
- `testing` — testing strategy overview; load sub-skills for unit or E2E specifics.
- `myteam-management` — use when creating, updating, or reorganizing roles and skills in this harness.

**Getting started:**
- To work on a web project, load `web-dev` and delegate to the appropriate sub-role.
- To manage the harness structure itself, load `myteam-management`.
