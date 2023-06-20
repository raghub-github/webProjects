// import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route
                exact
                path="/"
                element={<News pageSize={6} country="in" category="general" />}
              ></Route>
              <Route
                exact
                path="/business"
                element={<News pageSize={6} country="in" category="business" />}
              ></Route>
              <Route
                exact
                path="/entertainment"
                element={
                  <News pageSize={6} country="in" category="entertainment" />
                }
              ></Route>
              <Route
                exact
                path="/health"
                element={<News pageSize={6} country="in" category="health" />}
              ></Route>
              <Route
                exact
                path="/science"
                element={<News pageSize={6} country="in" category="science" />}
              ></Route>
              <Route
                exact
                path="/sports"
                element={<News pageSize={6} country="in" category="sports" />}
              ></Route>
              <Route
                exact
                path="/technology"
                element={
                  <News pageSize={6} country="in" category="technology" />
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
