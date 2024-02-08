import styled from "styled-components";
import React from "react";

const StyledNavbar = styled.div`
  ul {
    font-family: "copperplate";
    list-style-type: none;
    padding: 0;
    margin-top: 0;
  }

  li {
    display: inline-block;
  }

  li a {
    display: block;
    color: black;
    text-align: center;
    padding: 20px 30px;
    text-decoration: none;
  }

  /* Change the link color to #111 (black) on hover */
  li a:hover {
    background-color: #111;
    color: var(--background-color);
  }
`;
const StyledTitle = styled.h1`
  top: 0;
  font-family: "Copperplate";
  font-size: 4vh;
  font-style: normal;
  font-weight: light;
  line-height: normal;
  padding-bottom: 2vh;
  border-bottom: solid;
  margin-bottom: 0;
`;

export function NavBar() {
  return (
    <>
      <StyledTitle>Sabrinas familie</StyledTitle>
      <StyledNavbar>
        <ul>
          <li>
            <a href="/">Hjem</a>
          </li>
          <li>
            <a href="/RingdalsHistorie">Ringdals historie</a>
          </li>
          <li>
            <a href="/FladmarksHistorie">Fladmarks historie</a>
          </li>
          <li>
            <a href="/Slektstre">Slektstre</a>
          </li>
        </ul>
      </StyledNavbar>
    </>
  );
}
