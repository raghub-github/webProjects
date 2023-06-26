import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "64992fc44d13b1fac38d2d99",
      user: "6497e957df52586b7a551937",
      title: "My Title",
      description: "Mushkan",
      tag: "Its fake",
      date: "2023-06-26T06:27:16.046Z",
      __v: 0,
    },
    {
      _id: "649930434d133b1fac38d2d9c",
      user: "6497e957df52586b7a551937",
      title: "My Title2",
      description: "Sandip",
      tag: "Tag is here",
      date: "2023-06-26T06:29:23.122Z",
      __v: 0,
    },
    {
      _id: "64992fc44d13b1fac338d2d99",
      user: "6497e957df52586b7a551937",
      title: "My Title",
      description: "Mushkan",
      tag: "Its fake",
      date: "2023-06-26T06:27:16.046Z",
      __v: 0,
    },
    {
      _id: "6493930434d13b1fac38d2d9c",
      user: "6497e957df52586b7a551937",
      title: "My Title2",
      description: "Sandip",
      tag: "Tag is here",
      date: "2023-06-26T06:29:23.122Z",
      __v: 0,
    },
    {
      _id: "64992fc44d13b1fac38d2d399",
      user: "6497e957df52586b7a551937",
      title: "My Title",
      description: "Mushkan",
      tag: "Its fake",
      date: "2023-06-26T06:27:16.046Z",
      __v: 0,
    },
    {
      _id: "649930434d13b1fac38d2d93c",
      user: "6497e957df52586b7a551937",
      title: "My Title2",
      description: "Sandip",
      tag: "Tag is here",
      date: "2023-06-26T06:29:23.122Z",
      __v: 0,
    },
    {
      _id: "64992fc44d13b1fac38d2d993",
      user: "6497e957df52586b7a551937",
      title: "My Title",
      description: "Mushkan",
      tag: "Its fake",
      date: "2023-06-26T06:27:16.046Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initialNotes);
  // Add note
  const addNote = (title, description, tag) => {
    const note = {
      _id: "64992fc44d13b1fac38d2d993",
      user: "6497e957df52586b7a551937",
      title: "My Title",
      description: "Mushkan",
      tag: "Its fake",
      date: "2023-06-26T06:27:16.046Z",
      __v: 0,
    };
    setNotes(notes.push(note));
  };
  // Delete a note
  const deleteNote = () => {};
  // Edit a note
  const editNote = () => {};
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
