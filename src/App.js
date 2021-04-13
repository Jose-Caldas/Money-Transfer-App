import "../src/App.css";
import Aside from "./components/Aside";
import Main from "./components/main";
import MobileMenu from "./components/menus/mobileMenu";
import SideMenu from "./components/menus/SideMenu";
import TopMenu from "./components/menus/TopMenu";
import { GlobaStyles } from "./GlobalStyles";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme/Theme";
import image from "./assets/theme-light-dark.png";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <button className="darkMode" onClick={themeToggler}>
          <img src={image} alt="" srcset="" />
          Swap Theme
        </button>

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
