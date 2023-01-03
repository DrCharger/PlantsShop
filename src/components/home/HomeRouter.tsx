import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./homeMain/Home";
import { Main } from "./HomeRoter.styled";
import "./home.css";
import SelectedItem from "../selectedItem/SelectedItem";

const HomeRouter: React.FC = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prod/:id" element={<SelectedItem />} />
      </Routes>
    </Main>
  );
};

export default HomeRouter;
