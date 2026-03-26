import { useState, useEffect, useCallback, type ReactNode } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import type { ThemeName } from '@/types/theme';

const STORAGE_KEY = 'cb-theme';
const DEFAULT_THEME: ThemeName = 'warm';

function getInitialTheme(): ThemeName {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'warm' || stored === 'modern' || stored === 'dark') {
    return stored;
  }
  return DEFAULT_THEME;
}

interface Props {
  readonly children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const [theme, setThemeState] = useState<ThemeName>(getInitialTheme);

  const setTheme = useCallback((name: ThemeName) => {
    setThemeState(name);
    localStorage.setItem(STORAGE_KEY, name);
    document.documentElement.dataset['theme'] = name;
  }, []);

  useEffect(() => {
    document.documentElement.dataset['theme'] = theme;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext value={{ theme, setTheme }}>
      {children}
    </ThemeContext>
  );
}
