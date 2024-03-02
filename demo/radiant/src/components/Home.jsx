import React from "react";
import ProductCard from "./Product";
import Grid from "./Grid";
import Toppart from "./Toppart";
import { InputWithButton } from "./Signup";

const products = [
  {
    name:"Builder 1",
    title: "WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design",
    rating: 9.5,
    description: "WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design",
    price: "$19.99",
  },
  {
    name:"Builder 1",
    title: "WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design",
    rating: 9.8,
    description: "WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design",
    price: "$24.99",
  },
  {
    name:"Builder 1",
    title: "WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design",
    rating: 9.7,
    description: "WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design",
    price: "$19.99",
  },
  {
    name:"Builder 1",
    title: "WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design",
    rating: 9.8,
    description: "WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design",
    price: "$24.99",
  },
];

const Home = () => {
  return (
    <div>
      <Toppart/>
      <ProductCard products={products} />
      <Grid products={products} />
      <InputWithButton/>
    </div>
  );
};

export default Home;
