import './styles/App.css';
import Login from './pages/Login.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './styles/home.css';
import bg from './background.png';
import logo from './logo.png';
import icon from './icon.png';

import React,{useRef} from 'react';
import { ReactDOM } from 'react-dom';

function App() {
  document.title = "app";
  const about_us=useRef(null);

  const scrollToSection = (elementRef)=>{
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
      })
  }

  return (
      <div class="homepage">
      <link rel="icon" href={icon} type="image/png" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/> 
      <div class="navbar">
        <div class="navbar-content">
          <div class="logo"><img src={logo} alt="Logo"/></div>
          <div style={{width: "200px"}}></div>
          <div class="nav-buttons">
                    <a onClick={()=>scrollToSection(about_us)} class="nav-button">About Us</a>
                    <a href="/auth" class="nav-button">Log in as student</a>
                    <a href="/auth" class="nav-button">Log in as teacher</a>
                    </div>
        </div>
      </div>
      
      <div class="fill-screen">
        <div class="big-text">Welcome to Our Peer Sphere!</div>
      </div>
      <div ref={about_us} class="about-us" >
        <div class="about-us-content">
          <div class="about-us-text">
            <h2>About Us</h2>
            <p>PeerSphere is a collaborative learning platform designed to enhance knowledge sharing. Students can create and explore questions, while advanced analytics for teachers provide valuable insights to track progress and identify knowledge gaps. Our goal is to make learning interactive, personalized, and data-driven, empowering users to improve and grow together.</p>
          </div>
          <div class="about-us-image">
            <img src={bg} alt="Image"/>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;