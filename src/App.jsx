import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
  <Router>
    <Header />
    <Routes>
      < Route path="/" element={<About />} />
      < Route path="/Projects" element={<Projects />} />
      < Route path="/Contact" element={<Contact />} />

    </Routes>
  </Router>
    </>
  );
}

export default App;
