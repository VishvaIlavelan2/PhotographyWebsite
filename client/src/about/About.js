import "./about.css"
import React  from "react";
import Header from "../header/header.js";
import imageabout from "../testphotos/tiger omg1.jpg"

function About() {
  
    return (
      <div className="gridabout">
      <Header />
      <img className="aboutimage" src={imageabout} />
      <div className="aboutwrapper">   <span className="aboutmsg">About Me</span></div>
        <div className="aboutparagraph">
          <div className="textwrapper">
           <pre className="firstp">         My name is Vishva Ilavelan, and I am a 19 year-old photographer from Sammammish, Washington. Wildlife and nature photography has been a longtime passion of mine. I enjoy the 
      creative process that comes with photography, as well as the sense of adventure that wildlife photography brings. Nothing beats the thrill of searching for a rare, beautiful species to photograph!
      <br></br>        My name is Vishva Ilavelan, and I am a 19 year-old photographer from Sammammish, Washington. Wildlife and nature photography has been a longtime passion of mine. I enjoy the 
      creative process that comes with photography, as well as the sense of adventure that wildlife photography brings. Nothing beats the thrill of searching for a rare, beautiful species to photograph!
      <br></br>        My name is Vishva Ilavelan, and I am a 19 year-old photographer from Sammammish, Washington. Wildlife and nature photography has been a longtime passion of mine. I enjoy the 
      creative process that comes with photography, as well as the sense of adventure that wildlife photography brings. Nothing beats the thrill of searching for a rare, beautiful species to photograph!
      <br></br>        My name is Vishva Ilavelan, and I am a 19 year-old photographer from Sammammish, Washington. Wildlife and nature photography has been a longtime passion of mine. I enjoy the 
      creative process that comes with photography, as well as the sense of adventure that wildlife photography brings. Nothing beats the thrill of searching for a rare, beautiful species to photograph!
      <br></br>        My name is Vishva Ilavelan, and I am a 19 year-old photographer from Sammammish, Washington. Wildlife and nature photography has been a longtime passion of mine. I enjoy the 
      creative process that comes with photography, as well as the sense of adventure that wildlife photography brings. Nothing beats the thrill of searching for a rare, beautiful species to photograph!
      <br></br>        My name is Vishva Ilavelan, and I am a 19 year-old photographer from Sammammish, Washington. Wildlife and nature photography has been a longtime passion of mine. I enjoy the 
      creative process that comes with photography, as well as the sense of adventure that wildlife photography brings. Nothing beats the thrill of searching for a rare, beautiful species to photograph!
      <br></br> </pre>
          </div>    
        </div>
      </div>
    )
  };

  export default About;