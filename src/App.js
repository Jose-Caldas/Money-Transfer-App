import Aside from "./components/aside";
import Main from "./components/main/Main";
import SideMenu from "./components/sideMenu";
import GlobalStyles from "./GlobalStyles";
import Menu from "./utils/menu/Menu";
import MenuTop from "./utils/menu/MenuTop/MenuTop";

function App() {
  return (
    <div className="App" id="app">
      <Menu />
      <MenuTop></MenuTop>
      <SideMenu />
      <Main />
      <Aside />

      <GlobalStyles />
    </div>
  );
}

export default App;
