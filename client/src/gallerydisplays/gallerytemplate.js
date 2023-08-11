import "./gallery.css"
import React, { useEffect, useRef, useState }  from "react";
import Header from "../header/header.js";
import testimage1 from "../testphotos/killdeer.jpg"
import testimage2 from "../testphotos/willet waiting.JPG"
import testimage3 from "../testphotos/godwitwebsitepng.JPG"
import imageabout from "../testphotos/tiger omg1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

function imageArrayCreator(imageAmount) {
    const selectionArray = [testimage1, testimage2, testimage3, imageabout];
    const returnArray = [];
    for (let i = 0; i < imageAmount; i++)
    {
        const index = Math.floor(Math.random() * 4);
        returnArray.push(selectionArray[index]);
    }

    return returnArray;
}

function ImageCard (props) {
    const descriptons= ["Killdeer, Lake Sammamish State Park, Top 100 in the 2020 National Audubon Photo Awards", "Willets, like most other shorebirds, forage in the intertidal zone. Their lives consist of an intricate dance among the waves, feeding on invertebrates living in the sand as the tide recedes.", "A Marbled Godwit resting on a sandy beach, with a great look at Monterey Bay in the background!", "The queen and her quarry... Had the incredible privilege to have a clear, unobstructed view of this tigress and her three cubs. Few other animals on this earth have such elegance and beauty. I was so transfixed it took me a moment to actually get photographing."]
    const selectionArray = [testimage1, testimage2, testimage3, imageabout];
    const reference = useRef();
    const [spans, setSpans] = useState(0);
    
    

    useEffect(() => {
        reference.current.addEventListener("load", onLoad)
         }, []);
    
    function onLoad() {
        let height = 0
        try {
        height = reference.current.offsetHeight;
        } catch(error) {
            console.log(error);
        }
        let spanArea = Math.ceil(height) +20;
        setSpans(spanArea);
    }

    function onClick() {
        props.setImageSource(props.src);
        if (props.visibility === "hidden")
        {
      

        const findUrl = (url) => url === props.src;
        props.setDescription(descriptons[selectionArray.findIndex(findUrl)])
        props.setOverflowy("hidden");
        props.setVisibility("visible");
        } 
    }

    return  (
     <div className="image-list" style={{gridRowEnd: `span ${spans}`}}>   
    <img className={props.className} src ={props.src} ref={reference} onClick={onClick} alt="gridimage"/>
    <div className="placeholder1"></div>
    </div>
    );
    

}

function DisplayGenerator(props) {
  
    let returnArray =[];
    for (let i = 0; i < props.imageArray.length; i++)
    {
         returnArray.push(<ImageCard className= "gridImage" src ={props.imageArray[i]} setImageSource={props.setImageSource} setVisibility={props.setVisibility}  visibility={props.visibility} overflowy={props.overflowy} setOverflowy={props.setOverflowy} setDescription={props.setDescription}/> )
    }
    return returnArray;
}
function GalleryTemplate() {
    const imageArray = imageArrayCreator(25); 
    const descriptons= ["Killdeer, Lake Sammamish State Park, Top 100 in the 2020 National Audubon Photo Awards", "Willets, like most other shorebirds, forage in the intertidal zone. Their lives consist of an intricate dance among the waves, feeding on invertebrates living in the sand as the tide recedes.", "A Marbled Godwit resting on a sandy beach, with a great look at Monterey Bay in the background!", "The queen and her quarry... Had the incredible privilege to have a clear, unobstructed view of this tigress and her three cubs. Few other animals on this earth have such elegance and beauty. I was so transfixed it took me a moment to actually get photographing."]
    const [imageSource, setImageSource] = useState(null);
    const  [visibility, setVisibility] = useState("hidden");
    const [overflowy, setOverflowy] = useState("visible");
    const [imageDescription, setDescription] = useState(null);
    const [imagewidth, setWidth] = useState(0)
    let displayimgWidth = useRef();

    function closeDisplay() {
        setVisibility("hidden");
        setOverflowy("visible");
        setImageSource("/");
        setWidth(0);
    }

    
    useEffect(() => {
        displayimgWidth.current.addEventListener("load", onLoad)
         }, []);

         function onLoad() {
          try {
                console.log(displayimgWidth.current.offsetWidth);
            } catch (error)
            {
              console.log(error);
            }
                setVisibility("hidden");

          try {
            setWidth(displayimgWidth.current.offsetWidth);
          } 
          catch (error)
            {
              console.log(error);
            }     
               
               setVisibility("visible");
        
          
    
        }     

    return (
        
        <div className="galleryGrid" style={{overflowY: `${overflowy}`}}>
             <div className="clickDisplay" style={{visibility: `${visibility}`}}>
               <div className="imageDisplayWrapper">
                <img src={imageSource} className="displayImage" alt="displayimage" ref={displayimgWidth}/>
                <div className="description" style={{width: `${imagewidth}px`}}>
                    <div className="descriptionWrapper">
                    {imageDescription}
                    </div>
                    
                </div>
                </div>
                <div className="xWrapper">
                <FontAwesomeIcon icon={faX} onClick={closeDisplay} className="x"/>
                </div>
            </div>   
             <Header />
             <div className="displayspan">
             <DisplayGenerator imageArray={imageArray} setImageSource={setImageSource} setVisibility={setVisibility} visibility={visibility} overflowy={overflowy} setOverflowy={setOverflowy} setDescription={setDescription}/>
             </div>
    
        </div>
        
    );
};
export default GalleryTemplate;