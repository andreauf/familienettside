import styled from "styled-components";
import React from "react";

const StyledNavbar = styled.div`
  width: 100vw;
  height: 10vh;
  background: #ade3ef;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;
const StyledTitle = styled.h1`
  color: #000;
  font-family: "Inter";
  font-size: 4vh;
  font-style: normal;
  font-weight: light;
  line-height: normal;
`;

const StyledButton = styled.h1`
  position: absolute;
  top: 0;
  top: 0;
  right: 5vw;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-content: center;
`;

function PopUp() {
  return null;
}

export function NavBar() {
  return (
    <>
      <StyledNavbar>
        <StyledTitle>Fladmarkslekten</StyledTitle>
      </StyledNavbar>
      <StyledButton>
        <img src={"/menu-button.png"} onClick={() => <PopUp />} />
      </StyledButton>
    </>
  );
}
