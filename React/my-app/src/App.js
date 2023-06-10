// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [colors, setcolors] = useState("Enable Darkmode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    if (setAlert != null ) {
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setcolors("Enable Lightmode");
      document.body.style.backgroundColor = "#000b0f";
      document.body.style.color = "white";
      document.getElementById("exampleFormControlTextarea1").style.color =
        "white";
      document.getElementById(
        "exampleFormControlTextarea1"
      ).style.backgroundColor = "#000110";
      showAlert("Dark mood has been enabled", "success");
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
      showAlert("Light mood has been enabled", "success");
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
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
        <hr />
        <About />
      </div>
    </>
  );
}

export default App;
