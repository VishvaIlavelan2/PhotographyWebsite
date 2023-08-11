
import Slider from "./Slider.js"
import Header from "../header/header.js";
import { Link } from "react-router-dom";
import React  from "react";

function Headermessage() {
  return (

    <span class="wlcmessage"> Vishva Ilavelan Photography <Link to="/gallery"><button class="exploremore">Explore Gallery</button></Link></span>
    
  );
}

function Frontpage() {
  
    return (
      <div class="grid">
      <Header />
      
      <Headermessage />
   
      <Slider />
      </div>
    )
  };

  export default Frontpage;
  