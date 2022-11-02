import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/hero";
import Menu from "./components/menu";
import Bean from "./components/inthebean";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
   
    <App />

    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/whats-in-the-bean" element={<Bean/>} />
    </Routes>

  </BrowserRouter>,
  rootElement
);
