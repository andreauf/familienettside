import styled from "styled-components";

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
`;

const StyledRectangle = styled.div``;
