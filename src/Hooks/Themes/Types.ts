export interface HookData {
  theme: ThemeData;
}

interface ThemeData {
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
  };
}

export interface ThemesProps {
  children: React.ReactNode;
}