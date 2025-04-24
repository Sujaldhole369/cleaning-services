import React from "react";
import "./Main.css";
import carpet_cleaning from "../Assets/carpet-cleaning-services.jpg";
import stone_care from "../Assets/hard-flooring-polishing-services.jpg";
import deep_cleaning from "../Assets/Deep-Cleaning-1.jpg";
import upholstery_solution from "../Assets/upholstery-solutions-services.jpg";
import sanitization_services from "../Assets/sanitization-services.jpg";

const Main = () => {
  return (
    <div className="main">
      
      <p className="main-text-1">specialized for diverse needs</p>
        <h1>Our Expert Services</h1>
        <p className="main-p">
          We specialize in providing sanitization and premium cleaning
          facilities that match the modern compliance standards. Our competent
          team are experts in understanding unique requirements and customizing
          solutions that propel your business forward.
        </p>
        
 
      
        <div className="main-container">
          <div className="main-right-container">
            <h2>why choose hindustan?</h2>
            <p>Technology driven</p>
            <p>By constantly integration modern technology,we keep evolving.</p>
            <div className="main-container-lobo">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className="main-left-container">
            <img src={carpet_cleaning} alt="" />
            <img src={stone_care} alt="" />
            <img src={deep_cleaning} alt="" />
            <img src={upholstery_solution} alt="" />
            <img src={sanitization_services} alt="" />
          </div>
        </div>
      
       
        
      
    </div>
  );
};

export default Main;
