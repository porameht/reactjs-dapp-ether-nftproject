import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import { ThemeProvider } from "styled-components";
import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import { useState } from "react";

import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        {/* <Suspense fallback={<Loading />}> */}
        <Home accounts={accounts} setAccounts={setAccounts} />
        <About />
        {/* <ScrollToTop scrollPosition={y}/> */}
        <ScrollToTop /> {/* </Suspense> */}
        <Footer />
      </ThemeProvider>
    </main>
  );
}

export default App;
