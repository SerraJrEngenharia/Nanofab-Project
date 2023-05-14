import { ThemesProvider } from "./Hooks/Themes/Themes.Hooks";

// Router
import Routes from "./Modules/App/Routes/Index.Routes";

// Global Style
import { GlobalStyle } from "./GlobalStyle";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <ThemesProvider>
      <GlobalStyle />
      <ToastContainer autoClose={2000}/>
      <Routes />
    </ThemesProvider>
  );
}

export default App;
