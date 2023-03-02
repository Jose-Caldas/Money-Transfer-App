import "../src/App.css";
import Main from "./components/Main";
import MobileMenu from "./components/menus/mobileMenu";
import SideMenu from "./components/menus/SideMenu";
import TopMenu from "./components/menus/TopMenu";
import { GlobaStyles } from "./GlobalStyles";

import { ThemeProvider } from "styled-components";
import theme from "./Theme/theme";
import { CurrencyProvider } from "./components/context/useCurrencies";
import PaymentDetails from "./components/PaymentDetails";

function App() {
  return (
    <div className="App">
      <CurrencyProvider>
        <ThemeProvider theme={theme}>
          <SideMenu />
          <TopMenu />
          <MobileMenu />
          <Main />
          <PaymentDetails />
          <GlobaStyles />
        </ThemeProvider>
      </CurrencyProvider>
    </div>
  );
}

export default App;
