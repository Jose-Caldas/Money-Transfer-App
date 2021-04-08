import Aside from "./components/aside";
import Main from "./components/main/Main";
import SideMenu from "./Menus/sideMenu";
import GlobalStyles from "./GlobalStyles";
import Menu from "./Menus/mobileMenu/MobileMenu";
import MenuTop from "./Menus/TopMenu/MenuTop";

function App() {
  return (
    <div className="App" id="app">
      <Menu />
      <MenuTop />
      <SideMenu />
      <Main />
      <Aside />

      <GlobalStyles />
    </div>
  );
}

export default App;
