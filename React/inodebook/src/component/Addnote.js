import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const Addnote = () => {
  const context = useContext(noteContext);
  const { notes, setNotes, addNote, deleteNote, editNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = () => {};
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <h2 className="App">Add notes</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title"
            aria-describedby="titleHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            description
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Description"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addnote;
