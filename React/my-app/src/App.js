// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [colors, setcolors] = useState("Enable Darkmode");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setcolors("Enable Lightmode");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.getElementById("exampleFormControlTextarea1").style.color =
        "white";
      document.getElementById(
        "exampleFormControlTextarea1"
      ).style.backgroundColor = "black";
    } else {
      setMode("light");
      setcolors("Enable Darkmode");
      document.getElementById("exampleFormControlTextarea1").style.color =
        "black";
      document.getElementById(
        "exampleFormControlTextarea1"
      ).style.backgroundColor = "white";
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Navbar
        title="React"
        mode={mode}
        colors={colors}
        toggleMode={toggleMode}
        aboutReact="React.js"
      />
      <div className="container my-4" mode={mode}>
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        <hr />
        <About />
      </div>
    </>
  );
}

export default App;
