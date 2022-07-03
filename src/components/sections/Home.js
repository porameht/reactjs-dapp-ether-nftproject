import React, { useState, lazy, Suspense } from "react";
import styled, { keyframes } from "styled-components";
//------------------------------------//
import Button from "../Button";
import Logo from "../Logo";
import Twitter from "../../assets/social-media-icons/twitter.png";
import Ether from "../../assets/social-media-icons/Ether_logo.png";
import OpenSea from "../../assets/social-media-icons/Opensea_logo.png";
//-----------------------------------//
import { ConnectButton } from "@rainbow-me/rainbowkit";
import RoundTextBlack from "../../assets/Rounded-Text-Black.png";
import Loading from "../Loading";
import img from "../../assets/bg.gif";
const CoverVideo = lazy(() => import("../CoverVideo"));
const TypeWriterText = lazy(() => import("../TypeWriterText"));

//-------------------------------------------------//

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  /* height: ${(props) => props.theme.navHeight}; */
  margin: 0 auto;
  .mobile {
    display: none;
  }
  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    /* 1024 px */
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(2px);
    transform: ${(props) =>
      props.click ? "translateY(0)" : `translateY(1000%)`};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;

    touch-action: none;
  }
`;

// const LogoLink = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* align-items: center; */
//   filter: drop-shadow(1px 2px 5px Black);
//   padding-top: 10px;
//   @media (max-width: 48em) {
//     width: 100%;
//     padding-top: 10px;
//   }
// `;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  :hover {
    animation: shake 0.5s;
    animation-iteration-count: infinite;
  }
  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    /* background: ${(props) => props.theme.text}; */
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;
    &::after {
      display: none;
    }
  }
`;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    /* 1024 px */
    display: flex;
  }

  &::after,
  &::before {
    content: " ";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;

//-------------------------------------------------//

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  height: 100vh;
  /* min-height: 100vh;
  width: 100%; */
  position: relative;
  background-image: url(${img});
  background-size: cover;
`;

const Container = styled.div`
  width: 75%;
  min-height: 50vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const rotate = keyframes`
100%{
  transform: rotate(1turn);
}
`;

const Round = styled.div`
  position: absolute;
  bottom: -2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  /* border: 1px solid ${(props) => props.theme.text}; */
  border-radius: 50%;

  /* img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  } */
  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }
  @media (max-width: 48em) {
    right: 1rem;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  bottom: 2rem;
  right: 90%;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxl};

  @media (max-width: 64em) {
    width: 2rem;
    height: 2rem;
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Home = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }
  // ---------------------------------------------------------------- //
  const [click, setClick] = useState(false);

  // const scrollTo = (id) => {
  //   let element = document.getElementById(id);
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //     inline: "nearest",
  //   });
  //   setClick(!click);
  // };

  return (
    <Section id="home">
      {/*  */}

      <NavBar>
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>

        <Menu click={click}>
          {/* <MenuItem onClick={() => scrollTo("home")}></MenuItem>
          <MenuItem onClick={() => scrollTo("about")}></MenuItem> */}
          <MenuItem>
            <a
              href="http://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} width="80px"></img>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="http://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Ether} width="80px"></img>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="http://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={OpenSea} width="70px"></img>
            </a>
          </MenuItem>

          {/* Connect Desktop */}
          {/* {isConnected ? (
            <div className="mobile">
              <Button text="Connect Wallet" />
            </div>
          ) : (
            <div className="mobile">
              <Button text="Connect Wallet" onClick={connectAccount} />
            </div>
          )} */}
        </Menu>

        {/* Connect Desktop */}
        {/* {isConnected ? (
          <div className="desktop">
            <Button text="Connect Wallet" />
          </div>
        ) : (
          <div className="desktop">
            <Button text="Connect Wallet" onClick={connectAccount} />
          </div>
        )} */}

        {isConnected ? (
          <div>
            <p>Connected</p>
          </div>
        ) : (
          <div>
            <ConnectButton />
            {/* <Button text="Connect Wallet" onClick={connectAccount} /> */}
          </div>
        )}
      </NavBar>

      {/*  */}
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <TypeWriterText />
          </Suspense>
        </Box>
        <Box>
          <Suspense fallback={<Loading />}></Suspense>
        </Box>
      </Container>

      <Round>
        <SubTitle>Frankaa</SubTitle>
      </Round>
    </Section>
  );
};

export default Home;
