import React, { useState, useRef, useEffect } from "react";
import "./Homepage.css";
import Info from "./Info";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Achievements from "./Achievements";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";
import Popover from "@material-ui/core/Popover";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { ColorPicker } from "material-ui-color";

//Homepage
function Homepage() {
   const componentRef = useRef();
   const Print = useReactToPrint({
      content: () => componentRef.current,
   });

   const handlePrint = () => {
      if (isEmpty()) {
         alert("Can't Print Empty Document");
         return;
      }

      Print();
   };
   //nav hook
   const [nav, setnav] = useState("info");

   // font

   //info hooks
   const [name, setname] = useState("");
   const [subtitle, setsubtitle] = useState("");
   const [userdesc, setuserdesc] = useState("");
   //extra info hooks
   const [email, setemail] = useState("");
   const [contact, setcontact] = useState("");
   const [address, setaddress] = useState("");
   const [github, setgithub] = useState("");
   const [linkedin, setlinkedin] = useState("");
   const [portfolio, setportfolio] = useState("");
   //Experiecne Hooks
   //experience 1

   const [exp, setexp] = useState([
      {
         id: 1,
         postname: "",
         company: "",
         from: "",
         to: "",
         expdesc: [""],
      },
   ]);
   //Eduaction Hooks
   const [edu, setedu] = useState({
      //default education 1
      edu_1: {
         school: "",
         course: "",
         from: "",
         to: "",
         ach: "",
      },
   });
   const eduObject = {
      edu_1: {
         school: "",
         course: "",
         from: "",
         to: "",
         ach: "",
      },
   };

   // Skills Hooks
   const [input, setinput] = useState("");
   const [skills, setskills] = useState([]);
   const listofitems = () => {
      setskills((olditems) => {
         return [...olditems, input];
      });
      setinput("");
   };
   const deleteitems = (id) => {
      setskills((olditems) => {
         return olditems.filter((arrele, index) => {
            return id !== index;
         });
      });
   };
   //Projects Hooks
   //Project 1
   const [project, setproject] = useState({
      name: "",
      link: "",
      tech: "",
      desc: "",
   });
   const [project2, setproject2] = useState({
      name: "",
      link: "",
      tech: "",
      desc: "",
   });
   const [project3, setproject3] = useState({
      name: "",
      link: "",
      tech: "",
      desc: "",
   });

   const projectObject = {
      name: "",
      link: "",
      tech: "",
      desc: "",
   };
   //Achievements Hooks
   const [ach, setach] = useState("");
   const [list, setlist] = useState([]);
   const additem = () => {
      setlist((olditem) => {
         return [...olditem, ach];
      });
      setach("");
   };
   const deleteitem = (id) => {
      setlist((olditem) => {
         return olditem.filter((item, index) => {
            return id !== index;
         });
      });
   };

   // Clear all localstorage Values
   const removeall = () => (
      localStorage.clear(), window.location.reload(false)
   );

   const isEmpty = () => {
      if (
         //  photourl.length ||
         name.length ||
         subtitle.length ||
         userdesc.length ||
         email.length ||
         contact.length ||
         address.length ||
         github.length ||
         linkedin.length ||
         portfolio.length
      ) {
         return false;
      }
      if (
         input.length ||
         skills.length > 0 ||
         ach.length > 0 ||
         list.length > 0
      ) {
         return false;
      }
      // const dummyExp = {
      //    id: 1,
      //    postname: "",
      //    company: "",
      //    from: "",
      //    to: "",
      //    expdesc: "",
      // };

      // let expArray = [exp];

      // for (let i = 0; i < 6; ++i) {
      //    if (JSON.stringify(expArray[i]) !== JSON.stringify(dummyExp)) {
      //       return false;
      //    }
      // }

      const dummyProject = {
         name: "",
         link: "",
         tech: "",
         desc: "",
      };

      let projectArray = [project, project2, project3];
      for (let i = 0; i < 4; ++i) {
         if (JSON.stringify(projectArray[i]) !== JSON.stringify(dummyProject)) {
            return false;
         }
      }
      return true;
   };

   //Theme Hooks
   const [primary, setprimary] = useState("");
   const [secondary, setsecondary] = useState("");
   const themeList = [
      ["#34678c", "rgb(242, 100, 100)"],
      ["#2b273f", "#7cff81"],
      ["black", "#cddc39"],
      ["rgb(0 150 151)", "#ff9800"],
      ["rgb(70 88 178)", "#91c1dc"],
      ["rgb(38 70 83)", "#2a9d8f"],
      ["rgb(188 108 37)", "#dda15e"],
      ["rgb(0 48 73)", "#d62828"],
      ["rgb(140 47 57)", "#b23a48"],
   ];
   const [themes, setthemes] = useState(themeList);
   const [picker1Color, setPicker1Color] = useState("#34678c");
   const [picker2Color, setPicker2Color] = useState("rgb(242, 100, 100)");
   const [anchorEl, setAnchorEl] = useState(null);
   const [activeColor, setActiveColor] = useState(0);
   const handleClickPopover = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClosePopover = () => {
      setAnchorEl(null);
   };

   const openPopover = Boolean(anchorEl);
   const idPopover = openPopover ? "simple-popover" : undefined;
   const chooseColor = (theme, index) => {
      setprimary(theme[0]);
      setsecondary(theme[1]);
      setAnchorEl(null);
      setActiveColor(index);
   };
   const saveTheme = () => {
      const theme = [picker1Color, picker2Color];
      setthemes([...themes, theme]);
   };

   // Font Family Hook
   const [fontFamily, setFontFamily] = useState("Arial");

   const fonts = [
      "Arial",
      "Verdana",
      "Helvetica",
      "Tahoma",
      "Trebuchet MS",
      "Times New Roman",
      "Georgia",
      "Garamond",
      "Courier New",
      "Brush Script MT",
      "Lucida Sans",
      "Futara",
      "Segoe UI",
      "Lucida Bright",
      "Lucida Sans Typewriter",
      "Comic Sans MS",
      "Javanese Text",
   ].sort();

   // Use Effect Hook
   useEffect(() => {
      const prename =
         localStorage.getItem("name") === null
            ? ""
            : localStorage.getItem("name");
      setname(prename);
      setsubtitle(
         localStorage.getItem("subtitle") == null
            ? ""
            : localStorage.getItem("subtitle")
      );

      setuserdesc(
         localStorage.getItem("userdesc") == null
            ? ""
            : localStorage.getItem("userdesc")
      );
      setemail(
         localStorage.getItem("email") == null
            ? ""
            : localStorage.getItem("email")
      );
      setcontact(
         localStorage.getItem("contact") == null
            ? ""
            : localStorage.getItem("contact")
      );
      setaddress(
         localStorage.getItem("address") == null
            ? ""
            : localStorage.getItem("address")
      );
      setgithub(
         localStorage.getItem("github") == null
            ? ""
            : localStorage.getItem("github")
      );
      setlinkedin(
         localStorage.getItem("linkedin") == null
            ? ""
            : localStorage.getItem("linkedin")
      );
      setportfolio(
         localStorage.getItem("portfolio") == null
            ? ""
            : localStorage.getItem("portfolio")
      );
      setskills(
         localStorage.getItem("skills") == null
            ? []
            : JSON.parse(localStorage.getItem("skills"))
      );
      setlist(
         localStorage.getItem("list") == null
            ? []
            : JSON.parse(localStorage.getItem("list"))
      );
      setedu(
         localStorage.getItem("edu") == null
            ? eduObject
            : JSON.parse(localStorage.getItem("edu"))
      );
      setproject(
         localStorage.getItem("project") == null
            ? projectObject
            : JSON.parse(localStorage.getItem("project"))[0]
      );
      setproject2(
         localStorage.getItem("project") == null
            ? projectObject
            : JSON.parse(localStorage.getItem("project"))[1]
      );
      setproject3(
         localStorage.getItem("project") == null
            ? projectObject
            : JSON.parse(localStorage.getItem("project"))[2]
      );

      setexp(
         localStorage.getItem("exp") == null
            ? exp
            : JSON.parse(localStorage.getItem("exp"))
      );

      setthemes(
         localStorage.getItem("themes") == null
            ? themeList
            : JSON.parse(localStorage.getItem("themes"))
      );
      setprimary(
         localStorage.getItem("theme_primary") === null
            ? "#34678c"
            : localStorage.getItem("theme_primary")
      );
      setsecondary(
         localStorage.getItem("theme_secondary") === null
            ? "rgb(242, 100, 100)"
            : localStorage.getItem("theme_secondary")
      );
      setActiveColor(
         localStorage.getItem("activeColor") === null
            ? 0
            : parseInt(localStorage.getItem("activeColor"))
      );
   }, []);
   useEffect(() => {
      localStorage.setItem("name", name);
      localStorage.setItem("subtitle", subtitle);
      localStorage.setItem("userdesc", userdesc);
      localStorage.setItem("email", email);
      localStorage.setItem("contact", contact);
      localStorage.setItem("address", address);
      localStorage.setItem("github", github);
      localStorage.setItem("linkedin", linkedin);
      localStorage.setItem("portfolio", portfolio);
      localStorage.setItem("skills", JSON.stringify(skills));
      localStorage.setItem("list", JSON.stringify(list));
      localStorage.setItem("edu", JSON.stringify(edu));
      localStorage.setItem(
         "project",
         JSON.stringify([project, project2, project3])
      );
      localStorage.setItem("exp", JSON.stringify(exp));
      localStorage.setItem("themes", JSON.stringify(themes));
      localStorage.setItem("theme_primary", primary);
      localStorage.setItem("theme_secondary", secondary);
      localStorage.setItem("activeColor", activeColor);
   }, [
      name,
      subtitle,
      userdesc,
      email,
      contact,
      address,
      github,
      portfolio,
      linkedin,
      exp,
      skills,
      list,
      edu,
      project,
      project2,
      project3,
      exp,
      themes,
      primary,
      secondary,
      activeColor,
   ]);
   return (
      <div id="main">
         <main className="maincomponent">
            <div className="left">
               <div className="navbar">
                  <li
                     className={nav === "info" ? "active" : ""}
                     onClick={() => setnav("info")}
                  >
                     Info
                  </li>
                  <li
                     className={nav === "Experience" ? "active" : ""}
                     onClick={() => setnav("Experience")}
                  >
                     Experience
                  </li>
                  <li
                     className={nav === "Education" ? "active" : ""}
                     onClick={() => setnav("Education")}
                  >
                     Education
                  </li>
                  <li
                     className={nav === "Skills" ? "active" : ""}
                     onClick={() => setnav("Skills")}
                  >
                     Skills
                  </li>
                  <li
                     className={nav === "Projects" ? "active" : ""}
                     onClick={() => setnav("Projects")}
                  >
                     Projects
                  </li>
                  <li
                     className={nav === "Achievements" ? "active" : ""}
                     onClick={() => setnav("Achievements")}
                     style={{ width: "25%" }}
                  >
                     Achievements
                  </li>
               </div>
               {nav === "info" ? (
                  <Info
                     name={name}
                     setname={setname}
                     subtitle={subtitle}
                     setsubtitle={setsubtitle}
                     userdesc={userdesc}
                     setuserdesc={setuserdesc}
                     email={email}
                     setemail={setemail}
                     contact={contact}
                     setcontact={setcontact}
                     address={address}
                     setaddress={setaddress}
                     github={github}
                     setgithub={setgithub}
                     linkedin={linkedin}
                     setlinkedin={setlinkedin}
                     portfolio={portfolio}
                     setportfolio={setportfolio}
                  />
               ) : null}
               {nav === "Experience" ? (
                  <Experience
                     exp={exp}
                     setexp={setexp}
                     postname={exp.postname}
                     company={exp.company}
                     from={exp.from}
                     to={exp.to}
                     expdesc={exp.expdesc}
                  />
               ) : null}
               {nav === "Education" ? (
                  <Education edu={edu} setedu={setedu} />
               ) : null}
               {nav === "Skills" ? (
                  <Skills
                     input={input}
                     skills={skills}
                     listofitems={listofitems}
                     deleteitems={deleteitems}
                     setinput={setinput}
                     setskills={setskills}
                  />
               ) : null}

               {nav === "Projects" ? (
                  <Projects
                     project={project}
                     setproject={setproject}
                     name={project.name}
                     link={project.link}
                     tech={project.tech}
                     desc={project.desc}
                     project2={project2}
                     setproject2={setproject2}
                     name2={project2.name}
                     link2={project2.link}
                     tech2={project2.tech}
                     desc2={project2.desc}
                     project3={project3}
                     setproject3={setproject3}
                     name3={project3.name}
                     link3={project3.link}
                     tech3={project3.tech}
                     desc3={project3.desc}
                  />
               ) : null}
               {nav === "Achievements" ? (
                  <Achievements
                     ach={ach}
                     setach={setach}
                     list={list}
                     setlist={setlist}
                     additem={additem}
                     deleteitem={deleteitem}
                  />
               ) : null}
               <div className="scroller"></div>
            </div>
            <div className="right">
               <div className="up">
                  <div className="buttons">
                     <button className="print-button" onClick={handlePrint}>
                        Download Resume
                     </button>
                     <button className="print-button" onClick={removeall}>
                        Clear All
                     </button>
                  </div>
                  <div className="theme">
                     <h2>Theme</h2>
                     <div
                        style={{
                           background: `linear-gradient(45deg, ${primary}, ${secondary})`,
                        }}
                        onClick={handleClickPopover}
                     ></div>
                     <button
                        className="pick-theme-button"
                        onClick={handleClickPopover}
                        style={{ marginLeft: "20px" }}
                     >
                        Pick Theme
                     </button>
                     <Popover
                        id={idPopover}
                        open={openPopover}
                        anchorEl={anchorEl}
                        transformOrigin={{
                           vertical: "top",
                           horizontal: "left",
                        }}
                        onClose={handleClosePopover}
                     >
                        <Card sx={{ minWidth: 275 }}>
                           <CardContent>
                              <div>
                                 <div>
                                    <h3
                                       style={{
                                          display: "flex",
                                          marginTop: "4px",
                                       }}
                                    >
                                       Palette
                                    </h3>
                                    <div
                                       style={{
                                          display: "flex",
                                          marginTop: "4px",
                                       }}
                                    >
                                       {themes.map((theme, index) => (
                                          <div
                                             key={index}
                                             className={
                                                index === activeColor
                                                   ? "combo colors-active colors"
                                                   : "combo colors"
                                             }
                                             onClick={(e) =>
                                                chooseColor(theme, index)
                                             }
                                             style={{
                                                background: `linear-gradient(45deg, ${theme[0]}, ${theme[1]})`,
                                             }}
                                          ></div>
                                       ))}
                                    </div>
                                 </div>
                                 <div>
                                    <h3 style={{ marginTop: "4px" }}>
                                       Create New
                                    </h3>
                                    <div
                                       className="colors"
                                       style={{
                                          background: `linear-gradient(45deg, ${picker1Color}, ${picker2Color})`,
                                       }}
                                    ></div>
                                    <div>
                                       Primary{" "}
                                       <ColorPicker
                                          defaultValue={picker1Color}
                                          value={picker1Color}
                                          onChange={(color) =>
                                             setPicker1Color(`#${color.hex}`)
                                          }
                                          deferred
                                          disableAlpha
                                       />
                                       Secondary{" "}
                                       <ColorPicker
                                          defaultValue={picker2Color}
                                          value={picker2Color}
                                          onChange={(color) =>
                                             setPicker2Color(`#${color.hex}`)
                                          }
                                          deferred
                                          disableAlpha
                                       />
                                    </div>
                                    <div className="fontpicker-div">
                                       <div className="fontpicker-label">
                                          Font
                                       </div>
                                       <Select
                                          value={fontFamily}
                                          variant="standard"
                                          onChange={(e) =>
                                             setFontFamily(e.target.value)
                                          }
                                          className="fontpicker"
                                          autoWidth={true}
                                       >
                                          {fonts.map((font, idx) => (
                                             <MenuItem value={font} key={idx}>
                                                {font}
                                             </MenuItem>
                                          ))}
                                       </Select>
                                    </div>
                                    <button
                                       style={{ marginTop: "20px" }}
                                       onClick={saveTheme}
                                       className="save-theme-button"
                                    >
                                       Save Theme
                                    </button>
                                 </div>
                              </div>
                           </CardContent>
                        </Card>
                     </Popover>
                  </div>
               </div>
               <div className="resume-preview">
                  <ComponentToPrint
                     name={name}
                     subtitle={subtitle}
                     userdesc={userdesc}
                     email={email}
                     contact={contact}
                     address={address}
                     github={github}
                     linkedin={linkedin}
                     portfolio={portfolio}
                     exp={exp}
                     edu={edu}
                     skills={skills}
                     achlist={list}
                     project={project}
                     project2={project2}
                     project3={project3}
                     primary={primary}
                     secondary={secondary}
                     ref={componentRef}
                     fontFamily={fontFamily}
                  />
               </div>
            </div>
         </main>
      </div>
   );
}

export default Homepage;
//Vedant Jain Code Officially
