---
name: "Unit Testing (Vitest + RTL)"
description: "Load when writing unit or integration tests for React components or hooks. Uses Vitest and React Testing Library."
---

This project uses Vitest and React Testing Library (RTL) for unit and integration tests.

**File conventions:**
- Test files are named `ComponentName.test.tsx` or `hookName.test.ts`.
- Co-locate test files next to the code they test in the same directory.
- Use `describe` blocks to group related tests; use `it` or `test` for individual cases.

**React Testing Library patterns:**
```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MyComponent } from "./MyComponent";

it("shows the submit button when form is valid", async () => {
  const user = userEvent.setup();
  render(<MyComponent />);

  await user.type(screen.getByLabelText("Email"), "test@example.com");
  expect(screen.getByRole("button", { name: /submit/i })).toBeEnabled();
});
```

**Querying priority (use in this order):**
1. `getByRole` — most accessible and closest to how a user finds elements
2. `getByLabelText` — for form fields
3. `getByText` — for visible text
4. `getByTestId` — last resort only; add `data-testid` sparingly

**Assertions:**
- Use `@testing-library/jest-dom` matchers: `toBeInTheDocument`, `toBeEnabled`, `toHaveValue`, etc.
- Prefer `findBy*` (async) over `waitFor` + `getBy*` when waiting for async elements.

**Do not:**
- Do not use `act()` manually unless RTL cannot handle it — RTL wraps most interactions already.
- Do not test implementation details (internal state, private methods, exact class names).
- Do not snapshot test unless the output is highly stable and the snapshot is reviewed.
