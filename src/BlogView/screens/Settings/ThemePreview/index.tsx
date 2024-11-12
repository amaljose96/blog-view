import { ThemeNameContainer, ThemePreviewContainer } from './styles';
import { Theme } from 'BlogView/pearls/theme/types';
import { useCurrentTheme } from '../hooks/useCurrentTheme';

interface IThemePreviewProps {
  theme: Theme;
  name: string;
  themeKey: string;
}
export function ThemePreview({ theme, name, themeKey }: IThemePreviewProps) {
  const { getCurrentTheme, setCurrentTheme } = useCurrentTheme();
  const codeBackground =
    theme.reader.codeTheme === 'light' ? '#f5f5f5' : '#1e1e1e';
  const codeText = theme.reader.codeTheme === 'light' ? '#2a2a2a' : '#dcdcdc';
  console.log(getCurrentTheme(), themeKey);
  return (
    <ThemePreviewContainer
      onClick={() => {
        setCurrentTheme(themeKey);
      }}
    >
      <svg
        width="300"
        height="200"
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ borderRadius: theme.borderRadius + 'px' }}
      >
        <rect width="300" height="200" fill={theme.menuBackgroundColor} />
        <rect
          x="5"
          y="37"
          width="21"
          height="21"
          fill={theme.menuHoverBackgroundColor}
        />
        <rect
          x="5"
          y="62"
          width="21"
          height="21"
          fill={theme.menuHoverBackgroundColor}
        />
        <rect
          x="5"
          y="87"
          width="21"
          height="21"
          fill={theme.menuHoverBackgroundColor}
        />
        <path
          d={`M${30 + theme.borderRadius},30
            h${270 - theme.borderRadius} 
            v170
            h-270
            v-${170 - theme.borderRadius}
            q0,-${theme.borderRadius} ${theme.borderRadius},-${theme.borderRadius}
            Z`}
          fill={theme.containerBackgroundColor}
        />
        <rect x="35" y="7" width="56" height="15" fill={theme.textColor} />
        <rect
          width="40"
          height="15"
          transform="matrix(-1 0 0 1 131 7)"
          fill={theme.secondaryTextColor}
        />
        <rect x="75" y="45" width="180" height="15" fill={theme.textColor} />
        <rect x="8" y="40" width="15" height="15" fill={theme.textColor} />
        <rect x="8" y="90" width="15" height="15" fill={theme.textColor} />
        <rect x="8" y="65" width="15" height="15" fill={theme.textColor} />
        <path
          d="M74 87C74 80.3726 79.3726 75 86 75H243C249.627 75 255 80.3726 255 87V200H74V87Z"
          fill={theme.reader.backgroundColor}
        />
        <rect
          x="87"
          y="87"
          width="56"
          height="15"
          fill={theme.reader.textColor}
        />
        <rect
          x="87"
          y="110"
          width="155"
          height="5"
          fill={theme.reader.textColor}
        />
        <rect
          x="87"
          y="118"
          width="155"
          height="5"
          fill={theme.reader.textColor}
        />
        <rect
          x="87"
          y="126"
          width="155"
          height="5"
          fill={theme.reader.textColor}
        />
        <rect
          x="87"
          y="134"
          width="155"
          height="5"
          fill={theme.reader.textColor}
        />
        <rect
          x="87"
          y="142"
          width="155"
          height="5"
          fill={theme.reader.textColor}
        />
        <rect
          x="87"
          y="156"
          width="155"
          height="34"
          rx="12"
          fill={codeBackground}
        />
        <rect x="98" y="162" width="50" height="5" fill={codeText} />
        <rect x="98" y="170" width="88" height="5" fill={codeText} />
        <rect x="98" y="178" width="88" height="5" fill={codeText} />
      </svg>
      <ThemeNameContainer
        isSelected={getCurrentTheme() === themeKey}
        fontFamily={theme.reader.font}
      >
        {name}
      </ThemeNameContainer>
    </ThemePreviewContainer>
  );
}
