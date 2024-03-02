import React from "react";
import images from "../images/computer.png";
import Button from "./Button";

const MyComponent = ({ products }) => {
  return (
    <div>
      <h2 className="text-left max-w-5xl mx-auto text-3xl font-normal">
        Related deals you might like for
      </h2>
      <div className="container max-w-5xl md:flex-row h-80 mx-auto flex mb-5">
        <div className="container flex-col align-middle justify-center mx-auto px-4 py-8">
          <div className="flex-cpl">
            <img className="max-h-20 mx-auto" src={images} alt="images" />
            <div className=" p-4 rounded shadow-md">
              <div className="flex  items-center">
                <h3 className="text-lg  bg-blue-50 rounded-md">20% Off</h3>
                <span className="m-6  bg-blue-50 rounded-md">Limited Time</span>
              </div>
              <div className="text-gray-600 font-bold mt-2">
                {products[0].name}
              </div>
              <span className="text-gray-600 ">
                {products[0].description.slice(0, 22)}
              </span>
              <div className="flex m-2 gap-4 items-center mt-4">
                <span className="text-lg font-bold text-green-500">
                  {products[0].price}
                </span>
                <span className="text-sm font-bold line-through text-gray-500">
                  {products[0].price.slice(1, 6)}
                </span>
                <span className="text-sm font-bold text-red-500">
                  (20% Off)
                </span>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                View Deal
              </Button>
            </div>
          </div>
        </div>

        <div className="container flex-col align-middle justify-center mx-auto px-4 py-8">
          <div className="flex-cpl">
            <img className="max-h-20 mx-auto" src={images} alt="images" />
            <div className=" p-4 rounded shadow-md">
              <div className="flex  items-center">
                <h3 className="text-lg  bg-blue-50 rounded-md ">20% Off</h3>
                <span className="m-6  bg-blue-50 rounded-md">Limited Time</span>
              </div>
              <div className="text-gray-600 font-bold mt-2">
                {products[1].name}
              </div>
              <span className="text-gray-600 ">
                {products[1].description.slice(0, 22)}
              </span>
              <div className="flex m-2 gap-4 items-center mt-4">
                <span className="text-lg font-bold text-green-500">
                  {products[1].price}
                </span>
                <span className="text-sm font-bold line-through text-gray-500">
                  {products[1].price.slice(1, 6)}
                </span>
                <span className="text-sm font-bold text-red-500">
                  (20% Off)
                </span>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                View Deal
              </Button>
            </div>
          </div>
        </div>

        <div className="container flex-col align-middle justify-center mx-auto px-4 py-8">
          <div className="flex-cpl">
            <img className="max-h-20 mx-auto" src={images} alt="images" />
            <div className=" p-4 rounded shadow-md">
              <div className="flex  items-center">
                <h3 className="text-lg  bg-blue-50 rounded-md">20% Off</h3>
                <span className="m-6  bg-blue-50 rounded-md">Limited Time</span>
              </div>
              <div className="text-gray-600 font-bold mt-2">
                {products[2].name}
              </div>
              <span className="text-gray-600 ">
                {products[2].description.slice(0, 22)}
              </span>
              <div className="flex m-2 gap-4 items-center mt-4">
                <span className="text-lg font-bold text-green-500">
                  {products[2].price}
                </span>
                <span className="text-sm font-bold line-through text-gray-500">
                  {products[2].price.slice(1, 6)}
                </span>
                <span className="text-sm font-bold text-red-500">
                  (20% Off)
                </span>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                View Deal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
