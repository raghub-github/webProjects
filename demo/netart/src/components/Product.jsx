import React from "react";
import products from "../images/3.png";

const Product = () => {
  return (
    <section className="products-section b-line">
      <p style={{ fontWeight: "bold" }}>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img src={products} alt="Products" className="product-image" />
      <p style={{ fontWeight: "bold" }}>
        Valves - Pumps-Pipes -IoT Drives & Controllers - Wires & Cables - Solar
        Systems - Motors
      </p>
    </section>
  );
};

export default Product;
