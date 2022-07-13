import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import { ThemeProvider } from "styled-components";
import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import "@rainbow-me/rainbowkit/styles.css";
import TypeWriterText from "./components/TypeWriterText";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [chain.mainnet],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <main>
          <GlobalStyles />
          <ThemeProvider theme={light}>
            {/* <Suspense fallback={<Loading />}> */}
            <Home accounts={accounts} setAccounts={setAccounts} />
            <About />
            {/* <ScrollToTop scrollPosition={y}/> */}
            <ScrollToTop /> {/* </Suspense> */}
            {/* <Footer /> */}
          </ThemeProvider>
        </main>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
