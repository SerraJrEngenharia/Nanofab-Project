// Requirements base for Hooks
import React, { useState, useContext, createContext } from "react";

// Theme Provider
import { ThemeProvider } from "styled-components";

// Import the theme config
import mainTheme from "../../Configs/Themes/mainTheme";

// Interface for exports data hook
import { HookData, ThemesProps } from "./Types";

// Initiating auth context
const ThemesContext = createContext<HookData>({} as HookData);

export const ThemesProvider: React.FC<ThemesProps> = ({ children }) => {
  const [theme, setTheme] = useState(mainTheme.colors);

  return (
    <ThemesContext.Provider
      value={{
        theme: theme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemesContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemesContext);

  return context;
}
