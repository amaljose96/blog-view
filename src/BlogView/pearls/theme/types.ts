export interface Theme {
  borderRadius: number;
  useCircularButtons: boolean;

  textColor: string;
  menuBackgroundColor: string;
  menuHoverBackgroundColor: string;
  containerBackgroundColor: string;
  secondaryTextColor: string;

  reader: {
    backgroundColor: string;
    textColor: string;
    codeTheme: 'light' | 'dark';
    font: 'serif' | 'sans-serif';
  };
}

export interface ThemeContextProps {
  theme: Theme;
}
