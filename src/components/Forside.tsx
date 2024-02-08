import styled from "styled-components";
import React from "react";

export function Forside() {
  return (
    <>
      <StyledRectangle>
        <StyledImg src={"/FladmarkGård.svg"} alt={"Fladmark gård"} />
      </StyledRectangle>
    </>
  );
}

const StyledImg = styled.img`
  width: 80%;
  max-width: 800px;
`;

const StyledRectangle = styled.div``;
