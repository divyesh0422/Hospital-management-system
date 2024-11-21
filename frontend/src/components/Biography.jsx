import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At Caff Healthcare, we simplify access to healthcare by providing comprehensive information on all medical departments. Our intuitive platform helps users make informed health decisions and easily schedule appointments with skilled professionals. We're dedicated to making healthcare accessible and manageable for everyone.


 
          </p>
         
          <p>we bridge the gap between patients and providers</p>
          <p>
          At Caff Healthcare, we enhance health outcomes with seamless, innovative solutions designed for ease of use and accessibility. Our dedication is to transform your healthcare experience, making it as simple and efficient as possible.
          </p>
          <p>Leveraging cutting-edge technology, , ensuring that accessing healthcare is both convenient and straightforward.</p>
          <p>Trusted Experts Committed to Your Well-Being</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
