import "../src/App.css";
import Aside from "./components/Aside";
import Main from "./components/Main";
import MobileMenu from "./components/menus/mobileMenu";
import SideMenu from "./components/menus/SideMenu";
import TopMenu from "./components/menus/TopMenu";
import { GlobaStyles } from "./GlobalStyles";

import { ThemeProvider } from "styled-components";
import theme from "./Theme/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SideMenu />
        <TopMenu />
        <MobileMenu />
        <Main />

        <Aside />
        <GlobaStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;
