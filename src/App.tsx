import { ThemesProvider } from "./Hooks/Themes/Themes.Hooks";

import HomePage from "./Modules/App/Screens/Home/Page/Index";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <ThemesProvider>
      <GlobalStyle />
      <HomePage />
    </ThemesProvider>
  );
}

export default App;
