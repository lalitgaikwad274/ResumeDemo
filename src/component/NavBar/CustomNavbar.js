import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Landing = () => (
   <div>
      <h3>This is landing page with Foo and Bar</h3>
      <Foo />
      <Bar />
   </div>
);
const Foo = () => <div>This is component Foo.</div>;
const Bar = () => <div>This is component Bar.</div>;
const About = () => (
   <div style={{ height: 300, backgroundColor: "red", color: "white" }}>
      This is component About.
   </div>
);
const Header = () => (
   <div style={{ height: 100, background: "gray" }}>
      Header |<Link to="/about"> Go to about</Link>
   </div>
);
const Footer = () => (
   <div style={{ height: 100, background: "gray" }}>
      Footer |<Link to="/"> Go to about</Link>
   </div>
);

const NotFound = () => <div>Not found</div>;

const CustomNavabar = () => {
   return (
      <div>
         <BrowserRouter>
            <div>
               <Header />
               <Routes>
                  <Route exact path="/" element={<Landing />} />
                  <Route path="/about" element={<About />} />
                  <Route component={NotFound} />
               </Routes>
               <Footer />
            </div>
         </BrowserRouter>
      </div>
   );
};

export default CustomNavabar;
