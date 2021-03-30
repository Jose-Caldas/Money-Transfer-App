import Main from "./components/main";
import SideMenu from "./components/sideMenu";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Main />

      <GlobalStyles />
    </div>
  );
}

export default App;
