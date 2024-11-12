import { ReactNode, useState } from 'react';
import { defaultTheme } from '../defaultTheme';
import { ThemeContext } from '../ThemeContext';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes } from '../themes';

export const CustomThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const savedThemeKey = localStorage.getItem('theme') || 'default';
  const [currentThemeKey, setCurrentThemeKey] = useState(savedThemeKey);
  const theme =
    themes.find((theme) => theme.key === currentThemeKey)?.theme ||
    defaultTheme;

  return (
    <ThemeContext.Provider value={{ theme, setThemeKey: setCurrentThemeKey }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
