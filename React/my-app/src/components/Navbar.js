import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid ">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/">
                {props.aboutReact}
              </Link>
            </li>
          </ul>
          {/* <div className="color bg-success mr-2" style={{width: "20px", height:"20px", borderRadius:"50%"}}></div>
          <div className="color bg-warning mr-2" style={{width: "20px", height:"20px", borderRadius:"50%"}}></div>
          <div className="color bg-danger mr-2" style={{width: "20px", height:"20px", borderRadius:"50%"}}></div>
          <div className="color bg-secondary mr-2" style={{width: "20px", height:"20px", borderRadius:"50%"}}></div>
          <div className="color bg-info mr-5" style={{width: "20px", height:"20px", borderRadius:"50%"}}></div> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.colors}
            </label>
          </div>
         
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutReact: PropTypes.string,
};
Navbar.defaultProps = {
  title: "title set here",
  aboutReact: "About here",
};
