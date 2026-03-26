import { useTheme } from '@/context/ThemeContext';
import { THEMES } from '@/types/theme';
import type { ThemeName } from '@/types/theme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as ThemeName)}
      aria-label="Select theme"
      className="text-sm bg-surface border border-border text-text rounded px-2 py-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
    >
      {THEMES.map((t) => (
        <option key={t.name} value={t.name}>
          {t.label}
        </option>
      ))}
    </select>
  );
}
