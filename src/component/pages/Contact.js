import React, { useState } from "react";
import { send } from "emailjs-com";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Contact = () => {
   const [body, setBody] = useState({
      firstName: "",
      lastName: "",
      email: "",
      mobileNo: "",
      msg: "",
   });

   const onChangeHandle = (e) => {
      setBody({ ...body, [e.target.name]: e.target.value });
   };

   const onSubmit = (e) => {
      e.preventDefault();
      send("service_e80fo6p", "template_6hqgacn", body, "ycFJ3b61UXUABemvN")
         .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
         })
         .catch((err) => {
            console.log("FAILED...", err);
         });
   };


   return (
      <div style={{ backgroundColor: "#e1e7ea" }}>
         <div className="hero hero-inner">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6 mx-auto text-center">
                     <div className="intro-wrap">
                        <h1 className="mb-0">Contact Us</h1>
                        <p className="text-white">
                           Still confused what to choose? We are here to help
                           you select best services as per your requirement.
                           Drop us a message and we will get back to you.{" "}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="untree_co-section">
            <div className="container contact">
               <div className="row">
                  <div className="col-lg-6 mb-5 mb-lg-0">
                     <form
                        className="contact-form "
                        data-aos="fade-up"
                        data-aos-delay={200}
                     >
                        <div className="row">
                           <div className="col-6">
                              <div className="form-group">
                                 <label className="text-black" htmlFor="fname">
                                    First name
                                 </label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={body.firstName}
                                    onChange={onChangeHandle}
                                    required
                                 />
                              </div>
                           </div>
                           <div className="col-6">
                              <div className="form-group">
                                 <label className="text-black" htmlFor="lname">
                                    Last name
                                 </label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={body.lastName}
                                    onChange={onChangeHandle}
                                    required
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="form-group">
                           <label className="text-black" htmlFor="email">
                              Email address
                           </label>
                           <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              value={body.email}
                              onChange={onChangeHandle}
                              required
                           />
                        </div>
                        <div className="form-group">
                           <label className="text-black" htmlFor="mobile">
                              Mobile Number
                           </label>
                           <PhoneInput
                              type="tel"
                              className="form-control"
                              id="mobileNo"
                              name="mobileNo"
                              value={body.mobileNo}
                              onChange={onChangeHandle}
                              required
                              style={{ }}
                              
                           />
                        </div>
                        <div className="form-group">
                           <label className="text-black" htmlFor="message">
                              Message
                           </label>
                           <textarea
                              name="msg"
                              className="form-control"
                              id="message"
                              cols={30}
                              rows={5}
                              value={body.msg}
                              onChange={onChangeHandle}
                           />
                        </div>
                        <button
                           type="submit"
                           className="btn btn-primary mt-3"
                           onClick={onSubmit}
                        >
                           Send Message
                        </button>
                     </form>
                  </div>
                  <div className="col-lg-5 ml-auto">
                     {/* <div className="quick-contact-item d-flex align-items-center mb-4">
                        <span className="flaticon-phone-call" />
                        <address className="text">+91 1234567890</address>
                     </div> */}
                     <div className="quick-contact-item d-flex m-4">
                        <img src={require('./../../Assets/images/email.png')}
                        alt=""
                        style={{height:30,marginRight:20}}/>
                        <address className="text">
                           stabilizer1122@gmail.com
                        </address>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
