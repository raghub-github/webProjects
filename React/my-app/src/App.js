// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [colors, setcolors] = useState("Enable Darkmode");
  // const [scolor, setScolor] = useState("")
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setcolors("Enable Lightmode");
      document.body.style.backgroundColor = "#000b0f";
      document.body.style.color = "white";
      showAlert("Dark mood has been enabled", "success");
      document.title = `React - Dark Mood`;
    } else {
      setMode("light");
      setcolors("Enable Darkmode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mood has been enabled", "success");
      document.title = `React - Light Mood`;
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="React"
          mode={mode}
          colors={colors}
          // scolor={scolor}
          toggleMode={toggleMode}
          aboutReact="React.js"
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            ></Route>
            <Route exact path="/About" element={<About mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
