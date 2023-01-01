import React from "react";

const About = () => {
   return (
      <div style={{ backgroundColor: "#e1e7ea" }}>
         <div className="hero hero-inner">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6 mx-auto text-center">
                     <div className="intro-wrap">
                        <h1 className="mb-0">About Us</h1>
                        <p className="text-white">
                           A team working to bring technology access to all
                           aspiring individuals/organisations in a easy way.{" "}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="untree_co-section">
            <div className="container">
               <div className="row">
                  <div className="col-lg-7">
                     <div className="owl-single dots-absolute owl-carousel">
                        <img
                           src={require("./../../Assets/images/slider-1.jpg")}
                           alt="Free HTML Template by Untree.co"
                           className="img-fluid rounded-20"
                        />
                        {/* <img
                           src={require("./../../Assets/images/slider-2.jpg")}
                           alt="Free HTML Template by Untree.co"
                           className="img-fluid rounded-20"
                        /> */}
                     </div>
                  </div>
                  <div className="col-lg-5 pl-lg-5 ml-auto">
                     <h2 className="section-title mb-4">Mechions</h2>
                     <h2 className="text-justify">
                        We work to create saas based management systems for
                        organistions as per their requirements and create best
                        professional templates for resume
                     </h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
