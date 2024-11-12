import { useTheme } from 'BlogView/pearls/theme/useTheme';

export function useCurrentTheme() {
  const { setThemeKey } = useTheme();
  function getCurrentTheme(): string {
    return localStorage.getItem('theme') || 'default';
  }
  function setCurrentTheme(newThemeKey: string) {
    localStorage.setItem('theme', newThemeKey);
    setThemeKey(newThemeKey);
  }
  return {
    getCurrentTheme,
    setCurrentTheme,
  };
}
