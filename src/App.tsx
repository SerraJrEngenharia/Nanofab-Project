import { ThemesProvider } from "./Hooks/Themes/Themes.Hooks";

// Router
import Routes from "./Modules/App/Routes/Index.Routes";

// Global Style
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <ThemesProvider>
      <GlobalStyle />
      <Routes />
    </ThemesProvider>
  );
}

export default App;
