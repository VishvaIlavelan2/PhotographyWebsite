import React, { useState, useEffect, useMemo}  from "react";
import "./FrontPage.css";
import testimage1 from "../testphotos/killdeer.jpg"
import testimage2 from "../testphotos/willet waiting.JPG"
import testimage3 from "../testphotos/godwitwebsitepng.JPG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


function Dot(props) {


    
    function checkClicked() {
        if (props.dotKey === props.clicked) {
            return "dot sliderDotClicked";
        } else {
            return "dot sliderDotUnclick";
        }
      
    
    }

    function changeImage() {
          props.setImage(props.dotimage);
          props.setClicked(props.dotKey);
    }

    return (
        
        <FontAwesomeIcon icon={faCircle} className={checkClicked()} onClick={changeImage} />
    );
}
function Slider() {
   const imageArray = useMemo(() => [testimage1, testimage2, testimage3], [])
    const [image, setImage] = useState(imageArray[0]);
    const [clicked, setClicked] = useState(0);

    useEffect(() => 
    {
        setImage(imageArray[clicked])
        const timerID = setTimeout(() => {
           if (clicked === 2){
            setClicked(0);
           } else {
            let temp = clicked + 1;
            setClicked(temp);
           
           }
         }, 5000)    
         return () => clearTimeout(timerID)                                                                          
    },  [imageArray, clicked]
      );
    return( 
        <>
             <div className="dotWrapper">
               <Dot setImage={setImage} dotimage = {testimage1} clicked={clicked} setClicked={setClicked} dotKey={0}/>
               <Dot setImage={setImage} dotimage = {testimage2} clicked={clicked} setClicked={setClicked} dotKey={1}/>
               <Dot setImage={setImage} dotimage = {testimage3} clicked={clicked} setClicked={setClicked} dotKey={2}/>            
            </div>
           
        
          <div className="imageWrapper"> 
            {imageArray.map(function(imageID ) {
                if (image === imageID)
                {
                    return (<img className="image" src={imageID} alt="sliderimg" />);
              
                } 
                else return("");
            })}
            </div>
         
            
        </>      
    );
};

//  each dot, when clicked should display a different image. This is controlled with the slider state 
export default Slider;

// <div className="imageWrapper"> 
// {imageArray.map(function(imageID) {
// if (image === imageID)
  //  {
    //    return (<img className="image" src={imageID}/>);
  
   // } else {
        
   // }
//})}
//</div>