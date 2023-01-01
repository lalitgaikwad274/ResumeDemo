import React from "react";

const ResumeBuilding = () => {
   return (
      <>
         <div className="hero hero-inner">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6 mx-auto text-center">
                     <div className="intro-wrap">
                        <h2 className="text-white">Resume Building</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container mt-5 mb-5">
            <div className="row">
               <div className="col-6 col-md-6 col-lg-3">
                  <div className="media-1">
                     <a href="#" className="d-block mb-3">
                        <img
                           src={require("./../../Assets/images/hero-slider-1.jpg")}
                           alt="Image"
                           className="img-fluid"
                        />
                     </a>
                     <div className="d-flex mt-4">
                        <div>
                           <h3>
                              <a href="#">Excellence in Travel</a>
                           </h3>
                           <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-6 col-md-6 col-lg-3">
                  <div className="media-1">
                     <a href="#" className="d-block mb-3">
                        <img
                           src={require("./../../Assets/images/hero-slider-2.jpg")}
                           alt="Image"
                           className="img-fluid"
                        />
                     </a>
                     <div className="d-flex mt-4">
                        <div>
                           <h3>
                              <a href="#">Discovering Best</a>
                           </h3>
                           <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-6 col-md-6 col-lg-3">
                  <div className="media-1">
                     <a href="#" className="d-block mb-3">
                        <img
                           src={require("./../../Assets/images/hero-slider-3.jpg")}
                           alt="Image"
                           className="img-fluid"
                        />
                     </a>
                     <div className="d-flex mt-4">
                        <div>
                           <h3>
                              <a href="#">A New Moments of Life</a>
                           </h3>
                           <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-6 col-md-6 col-lg-3">
                  <div className="media-1">
                     <a href="#" className="d-block mb-3">
                        <img
                           src={require("./../../Assets/images/hero-slider-4.jpg")}
                           alt="Image"
                           className="img-fluid"
                        />
                     </a>
                     <div className="d-flex mt-4">
                        <div>
                           <h3>
                              <a href="#">Joy To Your Journey</a>
                           </h3>
                           <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container mb-4">
            <div className="row">
               <div className="col-6 col-md-6 col-lg-3">
                  <div className="text-center">
                     <img
                        src={require("./../../Assets/images/telegram.png")}
                        style={{
                           height: 30,
                           marginBottom: 10,
                        }}
                     />
                     <div className="service">Excellence in Travel</div>
                  </div>
                  <p>
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts.
                  </p>
               </div>
               <div className="col-6 col-md-6 col-lg-3">
                  <div className="text-center">
                     <img
                        src={require("./../../Assets/images/price-tag.png")}
                        style={{
                           height: 30,
                           marginBottom: 10,
                        }}
                     />
                     <div className="service">Discover Best</div>
                  </div>
                  <p>
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts.
                  </p>
               </div>
               <div className="col-6 col-md-6 col-lg-3">
                  <div className="text-center">
                     <img
                        src={require("./../../Assets/images/user.png")}
                        style={{
                           height: 30,
                           marginBottom: 10,
                        }}
                     />
                     <div className="service">A New Moments of Life</div>
                  </div>
                  <p>
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts.
                  </p>
               </div>
               <div className="col-6 col-md-6 col-lg-3">
                  <div className="text-center">
                     <img
                        src={require("./../../Assets/images/support.png")}
                        style={{
                           height: 30,
                           marginBottom: 10,
                        }}
                     />
                     <div className="service">Joy To Your Journey</div>
                  </div>
                  <p>
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts.
                  </p>
               </div>
            </div>
         </div>
      </>
   );
};

export default ResumeBuilding;
