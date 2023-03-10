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
const NotFound = () => <div>Not found</div>;

function App() {
   return (
      <>
         <BrowserRouter>
            <div>
               <MyNavbar />
               <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/resumebuilding" element={<ResumeBuilding />} />
                  <Route component={NotFound} />
               </Routes>
               <Footer />
            </div>
         </BrowserRouter>
         {/* <MyNavbar /> */}
         {/* <Home /> */}
         {/* <Footer /> */}
         {/* <CustomNavabar /> */}
         {/* <Homepage /> */}
      </>
   );
}

export default App;
