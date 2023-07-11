import Home from "./Home";
import Cuisine from "./Cuisine";
import React from "react";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:category" element={<Cuisine />} />
    </Routes>
  );
}

export default Pages;
