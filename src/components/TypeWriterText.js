import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Title = styled.h2`
  font-size: 28px;
  text-transform: capitalize;
  width: 100%;
  /* padding-bottom: 100px; */
  color: white;
  align-self: flex-start;
  align-items: center;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1 {
    color: blue;
  }
  .text-2 {
    color: orange;
  }
  .text-3 {
    color: red;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
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

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;
const TypeWriterText = () => {
  return (
    <>
      <Title>
        1 free plus gas fees per wallet
        <div>need to save more ? : 0.006969 ETH 3 max per wallet </div>
        <div>#findthelostmeeble</div>
        <div>#SaveMeeble</div>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text-1">Nuu DISCOD.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-2">Nuu RODMARP.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-3">Nuu UTILITY.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-3">JUST VIB 'N CCo</span>`)
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>TEAM RESERVE : 669 BECUASE WE NEED TOO</SubTitle>
      <ButtonContainer>
        <Button text="Explore" link="#home" />
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
