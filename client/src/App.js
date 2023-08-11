import React from "react";
import Front from "./homepage/FrontPage"
import About from "./about/About"
import Bird from "./gallerydisplays/birdphotography"
import Landscape from "./gallerydisplays/landscapephotography"
import Wildlife from "./gallerydisplays/gallerytemplate"
import Contact from "./contact/contact"
import Login from "./loginpage/loginpage"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Front />} />
     <Route path="/about" element={<About />} />
     <Route path="/birdphotography" element={<Bird />} />
     <Route path="/landscapephotography" element={<Landscape />} />
     <Route path="/wildlifephotography" element={<Wildlife />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  
  )
}

export default App;