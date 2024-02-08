import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Forside } from "./components/Forside";
import { NavBar } from "./components/NavBar";
import styled from "styled-components";
import "./style.css";
import React from "react";
import { Ringdal } from "./components/RingdalsHistorie";
import { Fladmark } from "./components/FladmarksHistorie";
import { Slektstre } from "./components/Slektstre";

const Content = styled.div``;

const App = () => {
  return (
    <>
      <NavBar />
      <Content>
        <BrowserRouter>
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
