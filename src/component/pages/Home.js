import React from "react";
import "./style.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3,
         paritialVisibilityGutter: 60,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
         paritialVisibilityGutter: 50,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         paritialVisibilityGutter: 30,
      },
   };
   return (
      <div style={{ backgroundColor: "#e1e7ea" }}>
         <div className="hero">
            <div className="container mx-auto w-75">
               <div className="row align-items-center">
                  <div className="col-lg-7">
                     <div className="intro-wrap">
                        <h1 className="mb-5">
                           Welcome to Template Based Resume Building
                        </h1>
                     </div>
                  </div>
                  <div className="col-lg-5">
                     <div className="slides">
                        <img
                           src={require("./../../Assets/images/resume.png")}
                           alt=""
                           className="img-fluid active"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row mb-5 justify-content-center">
               <div className="col-lg-6 text-center">
                  <h2 className="section-title text-center mb-3"> Services </h2>
                  <p>
                     We create resume templates <br />
                     We provide management system for created resumes to
                     organistaions as per the organistaion requirements whether
                     it is college or consulting/staffing companies
                  </p>
               </div>
            </div>
            <div className="row align-items-stretch">
               <div className="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1">
                  <div className="feature-1 d-md-flex flex-column">
                     <div className="text-center">
                        <img
                           src={require("./../../Assets/images/copy-writing.png")}
                           style={{ height: 50, alignSelf: "center" }}
                           alt=""
                        />
                        <span className="flaticon-house display-4 text-primary" />

                        <h3>Resume Writing</h3>
                     </div>

                     <p className="mb-0">
                        Hire a resume writer and get you resume created in
                        pdf/word format.
                     </p>
                  </div>
               </div>
               <div className="col-lg-4 order-lg-1">
                  <div className="feature-1 d-md-flex flex-column">
                     <div className="text-center">
                        <span className="flaticon-mail display-4 text-primary" />
                        <img
                           src={require("./../../Assets/images/management.png")}
                           style={{ height: 50 }}
                           alt=""
                        />
                        <h3>Placement Management System</h3>
                     </div>
                     <p className="mb-0">
                        Create unlimited resumes and manage the data in one
                        software, easy to access, easy to use.
                     </p>
                  </div>
               </div>
               <div className="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3">
                  <div className="feature-1 d-md-flex flex-column">
                     <div className="text-center">
                        <span className="flaticon-mail display-4 text-primary" />
                        <img
                           src={require("./../../Assets/images/copy-writing.png")}
                           style={{ height: 50 }}
                           alt=""
                        />
                        <h3>Resume Building</h3>
                     </div>

                     <p className="mb-0">
                        Get resume builder software to create and download
                        unlimited resumes at affoardable price.{" "}
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="row text-center justify-content-center mb-5">
            <div className="col-lg-7">
               <br />
               <h2 className="section-title text-center">Templates</h2>
            </div>
         </div>
         <div
            style={{
               width: "80%",
            }}
            className="mx-auto pb-5"
         >
            <Carousel
               itemClass="image-item"
               autoPlay={true}
               showDots={true}
               responsive={responsive}
               ssr={true} // means to render carousel on server-side.
               infinite={true}
            >
               {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                     className="item"
                     style={{
                        margin: 20,
                        width: 300,
                        borderRadius: 30,
                     }}
                  >
                     <a
                        href={require(`./../../Assets/images/hero-slider-${i}.jpg`)}
                        data-fancybox="gallery"
                     >
                        <img
                           src={require(`./../../Assets/images/hero-slider-${i}.jpg`)}
                           alt=""
                           style={{
                              height: "100%",
                              width: "100%",
                              borderRadius: 10,
                           }}
                        />
                     </a>
                  </div>
               ))}
            </Carousel>
         </div>
      </div>
   );
};

export default Home;
