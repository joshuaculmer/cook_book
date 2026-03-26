---
name: "Testing"
description: "Load when determining how to test something in this project. Provides an overview of the testing strategy and routes to the appropriate sub-skill."
---

This project uses a layered testing strategy. Load the appropriate sub-skill for the task:

- **Unit and integration tests:** load `testing/unit` — uses Vitest + React Testing Library.
- **End-to-end tests:** load `testing/e2e` — uses Playwright.

**When to write which kind:**
- Write unit/integration tests for: individual components, custom hooks, utility functions, form behavior.
- Write E2E tests for: critical user journeys (login, checkout, core flows), multi-page interactions.
- Do not write E2E tests for things that unit tests already cover — they are slower and harder to maintain.

**General testing principles:**
- Test behavior, not implementation. The test should not break when internal code is refactored.
- One test should assert one thing. Keep tests short and focused.
- Tests are documentation. A failing test should tell you exactly what broke.
- Do not mock what you do not own (e.g., internal functions). Mock at system boundaries (APIs, browser APIs).
