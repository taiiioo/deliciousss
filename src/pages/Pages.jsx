import Home from "./Home";
import Cuisine from "./Cuisine";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

function Pages() {
  let location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:category" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
