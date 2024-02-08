import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Forside } from "./components/Forside";
import { NavBar } from "./components/NavBar";
import styled from "styled-components";
import "./style.css";
import React from "react";

const Content = styled.div``;
const App = () => {
  return (
    <>
      <NavBar />
      <Content>
        <BrowserRouter basename={"/"}>
          <Routes>
            <Route path={"/"} element={<Forside />} />
          </Routes>
        </BrowserRouter>
      </Content>
    </>
  );
};
export default App;
