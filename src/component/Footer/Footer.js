import React from "react";

const Footer = () => {
   return (
      <>
         <div className="py-5 cta-section">
            <div className="container">
               <div className="row text-center">
                  <div className="col-md-12">
                     <h2 className="mb-2 text-white">
                        Get your resume job ready !!!{" "}
                     </h2>
                     <p className="mb-4 lead text-white text-white-opacity">
                        Tired of managing bulk resumes let our software manage
                        it for you
                     </p>
                     <p className="mb-0">
                        <a
                           href="/contact"
                           className="btn btn-outline-white text-white btn-md font-weight-bold"
                        >
                           Get in touch
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div class="container mt-4 mb-4">
            <div class="row justify-content-center">
               <div class="col-md-6 col-lg-4">
                  <div class="widget">
                     <h3 class="heading">Social Links</h3>
                     <p>
                        You could easily find us on social media !!! See you
                        there...
                     </p>
                  </div>
                  <div class="widget">
                     <ul class="list-unstyled social">
                        <li>
                           <a href="#">
                              <span class="icon-instagram"></span>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <span class="icon-facebook"></span>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <span class="icon-linkedin"></span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="col-md-6 col-lg-2">
                  <div class="widget">
                     <h3 class="heading">Pages</h3>
                     <ul class="links list-unstyled">
                        <li>
                           <a href="/">Home</a>
                        </li>
                        <li>
                           <a href="/about">About</a>
                        </li>
                        <li>
                           <a href="/contact">Contact Us</a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="col-md-6 col-lg-2">
                  <div class="widget">
                     <h3 class="heading">Services</h3>
                     <ul class="links list-unstyled">
                        <li>Resume Writing</li>
                        <li>Resume Builder Software</li>
                        <li>Placement Management System</li>
                     </ul>
                  </div>
               </div>
               <div class="col-md-6 col-lg-2">
                  <div class="widget">
                     <h3 class="heading">Contact</h3>
                     <ul class="list-unstyled quick-info links">
                        <li class="email">
                           <a href="#">stabilizer1122@gmail.com</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Footer;
