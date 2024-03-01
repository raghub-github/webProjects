import React from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const Toppart = () => {
  return (
    <>
      <div className="container mx-auto py-4 max-w-[1000px]">
        <h1 className="text-5xl text-left font-normal mb-3">
          Best Website Builders in the US
        </h1>
        <hr />
        <div className="py-4 self-center align-middle flex">
          <IoCheckmarkDoneCircleOutline className="self-center" />
          <p> &nbsp; Last Updated- &nbsp; February 22, 2020 &nbsp; &nbsp;</p>
          <IoInformationCircleOutline className="self-center text-xl" />
          <p> &nbsp; Advertising Disclosure</p>
          <p className="pl-[300px]">&nbsp; Top Relevant</p>
          <FaAngleDown className="self-center" />
        </div>
        <hr />
        <div className="py-4 self-center justify-between pr-[200px] align-middle flex">
          <p> Tools</p>
          <p> AWS Builder</p>
          <p> Start Build</p>
          <p> Build Supplies</p>
          <p> Tooling</p>
          <p> BlueHosting</p>
        </div>
        <div className="py-4 self-center  align-middle flex">
          <p className="px-2"> Home</p>
          <FaAngleRight className="self-center" />
          <p className="px-2">Hosting for all</p>
          <FaAngleRight className="self-center" />
          <p className="px-2"> Hosting</p>
          <FaAngleRight className="self-center" />
          <p className="px-2">Hosting6</p>
          <FaAngleRight className="self-center" />
          <p className="px-2"> Hosting5</p>
        </div>
      </div>
    </>
  );
};

export default Toppart;
