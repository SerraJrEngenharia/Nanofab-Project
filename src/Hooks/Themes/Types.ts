export interface HookData {
  theme: ThemeData;
}

interface ThemeData {
  colors: {
    primary: {
      light: string;
      normal: string;
      dark: string;
    };

    secondary: {
      light: string;
      normal: string;
      dark: string;
    };

    auxiliary: {
      success: {
        normal: string;
        dark: string;
      };

      attention: {
        normal: string;
        dark: string;
      };

      error: {
        normal: string;
        dark: string;
      };
    };

    foreground: string;
    middleground: string;
    background: string;

    text: {
      title: string;
      content: string;
      highlight: string;
      TitleSubArticles: string;
    };
  };

  fonts: {
    extrasmall: number;
    small: number;
    medium: number;
    large: number;
    extralarge: number;
  };
}

export interface ThemesProps {
  children: React.ReactNode;
}
