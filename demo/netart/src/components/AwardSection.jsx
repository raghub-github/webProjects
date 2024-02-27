import React from "react";
import award from "../images/award.png";
import trophy from "../images/1.png";

const AwardSection = () => {
  return (
    <section className="award-section">
      <div className="image-style">
        <img src={trophy} alt="trophy" className="trophy" />
      </div>
      <div className="">
        <h2>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h2>
        <ul>
          <li style={{ fontWeight: "bold" }}>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li style={{ fontWeight: "bold" }}>
            C.R.I. is the highest contributor in the country for the projects of
            EESI. (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <img src={award} alt="Award" className="award-image" />
        <p>
          Government of India has awarded the "National Energy Conservation
          Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
          received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &
          Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </section>
  );
};

export default AwardSection;
