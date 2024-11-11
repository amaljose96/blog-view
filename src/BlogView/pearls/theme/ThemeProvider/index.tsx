import { ReactNode } from 'react';
import { defaultTheme } from '../defaultTheme';
import { ThemeContext } from '../ThemeContext';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const CustomThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const theme = defaultTheme;

  return (
    <ThemeContext.Provider value={{ theme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
