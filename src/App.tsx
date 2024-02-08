import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Forside } from "./components/Forside";
import { NavBar } from "./components/NavBar";
import styled from "styled-components";
import "./style.css";
import React from "react";

const Content = styled.div``;

function Ringdal() {
  return (
    <>
      <p>Her kommer Ringdals historie</p>
    </>
  );
}

function Fladmark() {
  return (
    <>
      <p>Her kommer Fladmarks historie</p>
    </>
  );
}

function Slektstre() {
  return (
    <>
      <p>Her kommer slektstreet til vår familie</p>
    </>
  );
}

const App = () => {
  return (
    <>
      <NavBar />
      <Content>
        <BrowserRouter basename={"/"}>
          <Routes>
            <Route path={"/"} element={<Forside />} />
            <Route path={"/RingdalsHistorie"} element={<Ringdal />} />
            <Route path={"/FladmarksHistorie"} element={<Fladmark />} />
            <Route path={"/Slektstre"} element={<Slektstre />} />
          </Routes>
        </BrowserRouter>
      </Content>
    </>
  );
};

export default App;
