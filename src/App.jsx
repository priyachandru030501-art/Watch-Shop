import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import About from "./components/About";
import Submit from "./components/Submit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/submit" element={<Submit />} />
    </Routes>
  );
}

export default App;