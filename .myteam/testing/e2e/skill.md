---
name: "E2E Testing (Playwright)"
description: "Load when writing end-to-end tests for critical user journeys. Uses Playwright against the local dev server."
---

This project uses Playwright for end-to-end tests. Tests run against the local Vite dev server.

**File conventions:**
- E2E test files live in `e2e/` at the project root (or `tests/e2e/` — check the project layout).
- Name files after the journey they test: `auth.spec.ts`, `checkout.spec.ts`.
- Use one `test.describe` block per feature or user journey.

**Page Object pattern:**
Encapsulate page interactions in a Page Object to avoid duplication:
```ts
// e2e/pages/LoginPage.ts
export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("/login");
  }

  async login(email: string, password: string) {
    await this.page.getByLabel("Email").fill(email);
    await this.page.getByLabel("Password").fill(password);
    await this.page.getByRole("button", { name: /log in/i }).click();
  }
}
```

**Test patterns:**
```ts
import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";

test("user can log in", async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login("user@example.com", "password");
  await expect(page).toHaveURL("/dashboard");
});
```

**What to cover with E2E tests:**
- Authentication flows (login, logout, protected routes)
- Core user journeys (the main thing the app does)
- Critical form submissions with real side effects

**Do not:**
- Do not write E2E tests for things already covered by unit tests.
- Do not use `page.waitForTimeout()` — use `expect(locator).toBeVisible()` or `await page.waitForURL()` instead.
- Do not hard-code test credentials — use environment variables from `.env.test`.
