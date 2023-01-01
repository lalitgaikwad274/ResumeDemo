import React, { useState, useEffect } from "react";
import "./Homepage.css";
// import IconButton from "@material-ui/core/IconButton";

const WorkExp = ({
   number,
   item,
   setexp,
   postname,
   company,
   from,
   to,
   expdesc,
}) => {
   const [data, setData] = useState(item);
   // console.log(item);

   useEffect(() => {
      // console.log(data);
      let Data = JSON.parse(localStorage.getItem("exp"));
      const d = Data.map((ele) => (ele.id === number ? data : ele));
      localStorage.setItem("exp", JSON.stringify(d));
      setexp(d);
   }, [data]);

   return (
      <>
         <div className="form experience">
            <h2>Experience #{number} </h2>
            <div className="input-box">
               <span className="details">Post Title</span>
               <input
                  type="text"
                  placeholder="Post Name"
                  value={postname}
                  onChange={(e) =>
                     setData({ ...data, postname: e.target.value })
                  }
               />
            </div>
            <div className="input-box">
               <span className="details">Company</span>
               <input
                  type="text"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) =>
                     setData({ ...data, company: e.target.value })
                  }
               />
            </div>
            <div className="input-box">
               <span className="details">From</span>
               <input
                  type="date"
                  style={{ width: "50%", marginLeft: "1.3rem" }}
                  value={from}
                  onChange={(e) => setData({ ...data, from: e.target.value })}
               />
               <span
                  className="details"
                  style={{ marginLeft: "1rem", width: "20%" }}
               >
                  To
               </span>
               <input
                  type="date"
                  style={{ width: "50%", marginLeft: "0" }}
                  value={to}
                  onChange={(e) => setData({ ...data, to: e.target.value })}
               />
            </div>
            <div className="input-box textarea">
               <span className="details">Experience</span>

               <ul>
                  {expdesc.map((point, index) => (
                     <li>
                        <input
                           key={index}
                           type="text"
                           placeholder="Write your Experience Here"
                           value={expdesc[index]}
                           onChange={(e) => {
                              const pointdata = expdesc.map((ele, ind) => {
                                 // console.log(ind, " ", e.target.value);
                                 return index === ind ? e.target.value : ele;
                              });
                              setData({
                                 ...data,
                                 expdesc: [
                                    ...expdesc,
                                    (expdesc[index] = e.target.value),
                                 ],
                              });
                           }}
                        />
                     </li>
                  ))}
               </ul>
               <button
                  onClick={() => {
                     setData({ ...data, expdesc: expdesc.push("") });
                  }}
               >
                  Add point
               </button>
            </div>
         </div>
      </>
   );
};
function Experience({ setexp, postname, company, from, to, expdesc }) {
   let expdata = JSON.parse(localStorage.getItem("exp"));
   const [data, setData] = useState(expdata);

   const addExperience = () => {
      expdata = JSON.parse(localStorage.getItem("exp"));
      expdata.push({
         id: expdata.length + 1,
         postname: "",
         company: "",
         from: "",
         to: "",
         expdesc: "",
      });
      localStorage.setItem("exp", JSON.stringify(expdata));
      setData(expdata);
   };

   return (
      <div className="form workexp">
         <h1 className="heading">Work Experience</h1>
         {data.length > 0 &&
            data.map((item, index) => (
               <WorkExp
                  key={index}
                  number={item.id}
                  item={item}
                  setexp={setexp}
                  postname={postname}
                  company={company}
                  from={from}
                  to={to}
                  expdesc={item.expdesc}
               />
            ))}
         <button
            className="add-edu-button"
            onClick={addExperience}
            style={{ marginTop: "20px" }}
         >
            Add more Experience
         </button>
      </div>
   );
}

export default Experience;
