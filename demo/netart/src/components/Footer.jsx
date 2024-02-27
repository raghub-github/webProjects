import React from "react";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

export default function App() {
  return (
    <footer className="footer">
      <p className="footer-text1">
        <IoCall /> Toll free 1800 200 1234
      </p>
      <p className="footer-text3">
        <FaFacebook /> www.facebook.com/cripumps
      </p>
      <p className="footer-text2">
        <FaLink /> www.crigroups.com
      </p>
    </footer>
  );
}
