import React, { lazy, Suspense } from "react";
import styled from "styled-components";
// import Banner from './Banner'
import Logo from "./Logo";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";
import LinkedIn from "../Icons/LinkedIn";
import Loading from "./Loading";
const Carousel = lazy(() => import("../components/Carousel"));

// const Banner = lazy(() => import("./Banner"));

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: black;
  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
`;

const Container = styled.div`
  width: 75%;
  margin: 0.5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};
  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;
    & > *:last-child {
      width: 80%;
    }
  }

  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;
// const Left = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 48em) {
//     width: 100%;
//   }
// `;

// const IconList = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 1rem auto;

//   & > * {
//     padding-right: 0.5rem;
//     transition: all 0.2s ease;

//     &:hover {
//       transform: scale(1.2);
//     }
//   }
// `;
// const MenuItems = styled.ul`
//   list-style: none;
//   width: 50%;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: repeat(3, 1fr);
//   grid-gap: 1rem;

//   @media (max-width: 48em) {
//     display: none;
//   }
// `;
// const Item = styled.li`
//   width: fit-content;
//   cursor: pointer;

//   &::after {
//     content: " ";
//     display: block;
//     width: 0%;
//     height: 2px;
//     background: ${(props) => props.theme.text};
//     transition: width 0.3s ease;
//   }
//   &:hover::after {
//     width: 100%;
//   }
// `;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }
  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;

    span {
      margin-bottom: 1rem;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 40vh;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Section>
      <Suspense fallback={<Loading />}>{/* <Banner />{" "} */}</Suspense>

      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <Carousel />{" "}
          </Suspense>{" "}
        </Box>
        <Box>
          <Title>
            Welcome To The <br /> Meeble Club.
          </Title>
          <SubText>
            The Meeble CLUB is a private collection of NFTs—unique digital
            collectibles. The Meeble are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </SubText>
          <SubTextLight>
            With more than and drawn traits, each NFT is unique and comes with a
            membership to an exclusive group of successful investors. Join an
            ambitious ever-growing community with multiple benefits and
            utilities.
          </SubTextLight>
        </Box>
      </Container>

      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Weirdos Club. All rights reserved.
        </span>
        <span>
          Made with &#10084; by{" "}
          <a
            href="http://youtube.com/codebucks"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeBucks
          </a>
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
