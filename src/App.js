import "./App.css";
import MyNavbar from "./component/NavBar/MyNavbar";
import Footer from "./component/Footer/Footer";
import Home from "./component/pages/Home";
// import CustomNavabar from "./component/NavBar/CustomNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Login from "./component/pages/Login";
import ResumeBuilding from "./component/pages/ResumeBuilding";
import Homepage from "./component/Homepage";
const NotFound = () => <div>Not found</div>;

function App() {
   return (
      <>
         <BrowserRouter>
            <div style={{position:'relative'}}>
               <MyNavbar />
               <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="#" element={<Login />} />
                  <Route path="/resumebuilding" element={<ResumeBuilding />} />
                  <Route component={NotFound} />
               </Routes>
               {/* <div className="msg">
                  <img  src={require("./Assets/images/comment.png")}/>
               </div> */}
               <Footer />
            </div>
         </BrowserRouter>
         
         {/* <CustomNavabar /> */}
         {/* <Homepage /> */}
      </>
   );
}

export default App;
