import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Forside } from "./components/Forside";
import { NavBar } from "./components/NavBar";
import styled from "styled-components";
import "./style.css";
const Content = styled.div`
  padding-top: 9vh;
`;
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
