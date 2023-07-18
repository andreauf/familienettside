import styled from "styled-components";

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
export function NavBar() {
  return (
    <>
      <StyledNavbar>
        <StyledTitle>Fladmarkslekten</StyledTitle>
      </StyledNavbar>
    </>
  );
}
