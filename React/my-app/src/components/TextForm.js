import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = (e) => {
    e.preventDefault();
    console.log("UpperCase Button Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = (e) => {
    e.preventDefault();
    console.log("UpperCase Button Clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (e) => {
    e.preventDefault();
    console.log("State Changed");
    setText(e.target.value);
  };

  return (
    <>
    <div className="App container">
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          placeholder="Enter Your Text Here"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary m-4" onClick={handleUpClick}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary m-4" onClick={handleLoClick}>
        Convert To LowerCase
      </button>
    </div>
    <div className="App container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Charecters</p>
      <p>Aprox {0.008*text.split(" ").length} Minutes Takes to Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "Heading set here",
};
