import React from "react";
import styled from "styled-components";

const StyledPDF = styled.iframe`
  width: 80%;
  height: 100vh;
`;

export function Byfolk() {
  return (
    <>
      <StyledPDF src={"Byfolk på Lasetra.pdf"} />
    </>
  );
}
