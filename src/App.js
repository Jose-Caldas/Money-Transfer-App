import "../src/App.css";
import Aside from "./components/Aside";
import Main from "./components/main";
import MobileMenu from "./components/menus/mobileMenu";
import SideMenu from "./components/menus/SideMenu";
import TopMenu from "./components/menus/TopMenu";
import { GlobaStyles } from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <TopMenu />
      <MobileMenu />
      <Main />

      <Aside />
      <GlobaStyles />
    </div>
  );
}

export default App;
