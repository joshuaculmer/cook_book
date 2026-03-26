---
name: "Tailwind CSS"
description: "Load when writing or reviewing any UI styling in this project. Covers utility class patterns, responsive design, and Tailwind best practices."
---

This project uses Tailwind CSS for all styling. Do not write custom CSS unless Tailwind cannot meet the need.

**Core patterns:**
- Apply utility classes directly on JSX elements: `className="flex items-center gap-4"`.
- Use responsive prefixes for breakpoints: `sm:`, `md:`, `lg:`, `xl:`.
- Use `hover:`, `focus:`, `disabled:` state prefixes for interactive elements.
- Prefer semantic spacing values (`gap-4`, `p-6`) over arbitrary values (`gap-[17px]`).

**Component styling conventions:**
- Extract repeated class strings to a named variable inside the component if they exceed ~5 utilities:
  ```tsx
  const cardClass = "rounded-xl border border-gray-200 bg-white p-6 shadow-sm";
  ```
- For conditional classes, use template literals or a utility like `clsx` / `cn`:
  ```tsx
  className={cn("btn", isActive && "btn-active")}
  ```

**Do not:**
- Do not use arbitrary values unless absolutely necessary (e.g., avoid `w-[327px]`).
- Do not add a `className` string longer than ~10 utilities without extracting it.
- Do not use Tailwind for animation that requires JavaScript — use a library or CSS keyframes.

**Dark mode:**
- Use the `dark:` prefix if the project has dark mode enabled in `tailwind.config`.
- Check `tailwind.config.ts` for custom theme values before inventing new ones.
