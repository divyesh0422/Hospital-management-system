import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{"Welcome to Caff Hospitals | Your Partner in Comprehensive and Compassionate Healthcare"}</h1>
          <p>
          At Caff Healthcare, we simplify access to healthcare by providing comprehensive knowledge of all medical departments. Our platform empowers users to make informed decisions and easily schedule appointments with healthcare professionals. Through innovative technology, we bridge the gap between patients and providers, ensuring healthcare is both accessible and convenient. Our mission is to enhance health outcomes with seamless, user-friendly solutions.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
