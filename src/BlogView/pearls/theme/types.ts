export interface Theme {
  borderRadius: number;

  textColor: string;
  menuBackgroundColor: string;
  menuHoverBackgroundColor: string;
  containerBackgroundColor: string;
  secondaryTextColor: string;

  reader: {
    backgroundColor: string;
    textColor: string;
    codeTheme: 'light' | 'dark';
    font: string;
  };
}

export interface ThemeContextProps {
  theme: Theme;
  setThemeKey: (key: string) => void;
}
