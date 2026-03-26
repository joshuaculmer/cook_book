export type ThemeName = 'warm' | 'modern' | 'dark';

export interface ThemeDefinition {
  readonly name: ThemeName;
  readonly label: string;
}

export const THEMES: readonly ThemeDefinition[] = [
  { name: 'warm',   label: 'Warm & Rustic'  },
  { name: 'modern', label: 'Clean & Modern' },
  { name: 'dark',   label: 'Elegant & Dark' },
] as const;
