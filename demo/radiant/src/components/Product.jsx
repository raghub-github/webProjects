import React from "react";
import images from "../images/computer.png";
import Button from "./Button";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const Grid = ({ products }) => {
  return (
    <div className="section p-4">
      <div className="container max-w-5xl mx-auto grid mb-5">
        {products.map((curElem, index) => {
          const { name, title, rating, description } = curElem;
          return (
            <div key={index} className="card grid mb-12 grid-cols-1 md:grid-cols-3 transition-all ">
              <figure className="relative overflow-hidden md:w-40 md:self-center">
                <div className="text-left">{index + 1}</div>
                <img src={images} alt={name} className="h-32" />
                <p className="mt-2 text-sm">{name}</p>
              </figure>

              <div className="relative text-left overflow-hidden md:ml-5 md:self-center md:w-[90%] transition-all duration-300">
                <p className="mt-2 text-sm">{description}</p>
                <p className="mt-2 text-sm"><strong>Main highlights: </strong>{title}</p>
                <p className="flex text-blue-600 py-4 self-center gap-2 cursor-pointer  ">Show more <FaAngleDown className="mt-2" /></p>
              </div>

              <div className="h-52 justify-end md:flex md:flex-col md:ml-20 md:max-w-40 md:mr-12 md:rounded-b-lg md:bg-green-50 md:p-4">
                <h3 className="text-4xl font-medium text-blue-800 mb-2">
                  {rating}
                </h3>
                <p className="font-medium text-blue-800 mb-2">Exceptional</p>
                <div className="flex justify-center">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalfAlt className="text-yellow-500" />
                </div>
                <div className="flex justify-center mt-10">
                  <Button />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
