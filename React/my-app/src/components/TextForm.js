import React, { useState } from "react";
import PropTypes from "prop-types";


export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = (e) => {
    e.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase", "success");
  };

  const handleLoClick = (e) => {
    e.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase", "success");
  };

  const handleClearClick = (e) => {
    e.preventDefault();
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "danger");
  };

  const handleCopyClick = (e) => {
    e.preventDefault();
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  };
  
  const handleExtraSpaceClick = (e) => {
    e.preventDefault();
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed", "warning");
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    console.log("State Changed");
    setText(e.target.value);
  };

  // const download = (filename, text) => {
  //   var element = document.createElement("a");
  //   element.setAttribute(
  //     "href",
  //     "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  //   );
  //   element.setAttribute("download", filename);
  //   element.style.display = "none";
  //   document.body.appendChild(element);
  //   element.click();
  //   document.body.removeChild(element);
  // };

  return (
    <>
      <div className="App container ">
        <h2 className="mb-4">{props.heading}</h2>
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
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaceClick}>
          Remove Extra Space
        </button>
        {/* <button className="btn btn-primary m-4" onClick={download("data", {text})}>
          Dounload text
        </button> */}
      </div>

      <div className="App container my-3 colorIS">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Charecters
        </p>
        <p>Aprox {0.008 * text.split(" ").length} Minutes Takes to Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "write something in the textbox above to preview it here"}
        </p>
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
