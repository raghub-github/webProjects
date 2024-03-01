import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 flex justify-center items-center text-center text-neutral-600 dark:bg-neutral-900 dark:text-neutral-200 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-[150px] md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Categories
            </h6>
            <p className="mb-4">
              <a href="/" className= "text-neutral-600 dark:text-neutral-200">Web Builder</a>
            </p>
            <p className="mb-4">
              <a href="/" className= "text-neutral-600 dark:text-neutral-200">Hosting</a>
            </p>
            <p className="mb-4">
              <a href="/" className= "text-neutral-600 dark:text-neutral-200">Data Center</a>
            </p>
            <p>
              <a href="/" className= "text-neutral-600 dark:text-neutral-200">Robotic-Automation</a>
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Contact
            </h6>
            <p className="mb-4">
              <a href="/" className= "text-neutral-600 dark:text-neutral-200">Contact</a>
            </p>
            <p className="mb-4">
              <a href="/" className= "text-neutral-600 dark:text-neutral-200">Privacy Policy</a>
            </p>
            <p className="mb-4">
              <a href="/" className= "text-neutral-600 dark:text-neutral-200">Terms Of Service</a>
            </p>
            <p className="mb-4">
              <a href="/" className="text-neutral-600 dark:text-neutral-200">Categories</a>
            </p>
            <p>
              <a href="/" className= "text-neutral-600 dark:text-neutral-200">About</a>
            </p>
          </div>
          <div>
            <p className="mb-4 mt-10 flex items-center justify-center md:justify-start">
              United States <MdKeyboardArrowDown className="ml-2 text-2xl" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
