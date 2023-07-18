import styled from "styled-components";

export function Forside() {
  return (
    <>
      <StyledRectangle>
        <StyledImg src={"/FladmarkGård.jpeg"} alt={"Fladmark gård"} />
      </StyledRectangle>
    </>
  );
}

const StyledImg = styled.img`
  width: 50vw;
  height: 40vh;
  border-radius: 148px;
  filter: grayscale(100%);
`;

const StyledRectangle = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 40vh;
  border: 10px solid #ade3ef;
  border-radius: 148px;
`;
