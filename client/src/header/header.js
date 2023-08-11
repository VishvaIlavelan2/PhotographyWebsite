import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFlickr } from "@fortawesome/free-brands-svg-icons"

const HeaderElement = (props) => {
    if (props.elementName === "Home") {
      return <li class="navelement home"><Link to={props.route}>{props.elementName}</Link></li>
    } else {
      return <li class="navelement"><Link to={props.route}>{props.elementName}</Link></li>
    }
  };

  
  function Header() {
    const headerElementNames = ["Home", "About", "Bird Photography", "Landscape Photography", "Wildlife Photography", "Contact"];
    const routes = ["/", "/about", "/birdphotography", "/landscapephotography", "/wildlifephotography", "/contact"]
    return (
      <>
      
        <div class="header">
        <a href="https://www.instagram.com/vishvailavelan_photography/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon className="fa left"icon={faInstagram} /> </a>
          <FontAwesomeIcon className="fa"icon={faTwitter} />
          <a href="https://www.flickr.com/photos/vishvailavelanphotography/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className="fa"icon={faFlickr} /></a>
         <ul>
          <HeaderElement elementName = {headerElementNames[0]} route = {routes[0]} />
          <HeaderElement elementName = {headerElementNames[1] } route = {routes[1]}/>
          <HeaderElement elementName = {headerElementNames[2]} route = {routes[2]} />
          <HeaderElement elementName = {headerElementNames[3]} route = {routes[3]}/>
          <HeaderElement elementName = {headerElementNames[4]} route = {routes[4]}/>
          <HeaderElement elementName = {headerElementNames[5]} route = {routes[5]}/>
         </ul>
        </div>
      </>
    )    
  }

  export default Header;
