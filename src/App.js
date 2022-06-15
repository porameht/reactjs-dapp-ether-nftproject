import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import { ThemeProvider } from "styled-components";
import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import { useState } from "react";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        {/* <Suspense fallback={<Loading />}> */}
        <Navigation accounts={accounts} setAccounts={setAccounts} />
        <Home />
        <About />
        {/* <ScrollToTop scrollPosition={y}/> */}
        <ScrollToTop /> {/* </Suspense> */}
      </ThemeProvider>
    </main>
  );
}

export default App;
