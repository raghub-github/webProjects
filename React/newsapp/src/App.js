// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const [progress, setProgress] = useState(0);
  // setProgress(progress);
  // const setProgress = (progress) => {
  //   setProgress(progress)
  // };

  const apikey = process.env.REACT_APP_NEWS_API;

  return (
    <>
      <Router>
        <Navbar onSearch={handleSearch} />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="general"
                  pageSize={12}
                  country="in"
                  category="general"
                  searchQuery={searchQuery}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="general"
                  pageSize={12}
                  country="in"
                  category="general"
                  searchQuery={searchQuery}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="business"
                  pageSize={12}
                  country="in"
                  category="business"
                  searchQuery={searchQuery}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="entertainment"
                  pageSize={12}
                  country="in"
                  category="entertainment"
                  searchQuery={searchQuery}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="health"
                  pageSize={12}
                  country="in"
                  category="health"
                  searchQuery={searchQuery}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="science"
                  pageSize={12}
                  country="in"
                  category="science"
                  searchQuery={searchQuery}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="sports"
                  pageSize={12}
                  country="in"
                  category="sports"
                  searchQuery={searchQuery}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  key="technology"
                  pageSize={12}
                  country="in"
                  category="technology"
                  searchQuery={searchQuery}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
