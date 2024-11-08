import './App.css';
import Titlebar from './Titlebar.js';
import Login from './pages/Login.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './home.css';
import bg from './background.png';
import logo from './logo.png';

import React from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-3OpwKlCaQQqFoQtVz_CR_5mtYLn10H8",
  authDomain: "nushhack-bd3ba.firebaseapp.com",
  projectId: "nushhack-bd3ba",
  storageBucket: "nushhack-bd3ba.firebasestorage.app",
  messagingSenderId: "776117645348",
  appId: "1:776117645348:web:9976df6f68e5e6b793a8b1",
  measurementId: "G-KN9FMB51Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  document.title = "app";

  return (
    <React.Fragment>
      <div class="homepage">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/> 
      <div class="navbar">
        <div class="navbar-content">
          <div class="logo"><img src={logo} alt="Logo"/></div>
          <div style={{width: "200px"}}></div>
          <div class="nav-buttons">
                    <a id="about-us-anchor" class="nav-button">About Us</a>
                    <a href="/Login" class="nav-button">Log in</a>
                    <button class="nav-button">Sign Up</button>
                    </div>
        </div>
      </div>
      
      <div class="fill-screen">
        <div class="big-text">Welcome to Our Peer Sphere!</div>
      </div>
      <div id="about-us-anchor" class="about-us" >
        <div class="about-us-content">
          <div class="about-us-text">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
          <div class="about-us-image">
            <img src={bg} alt="Image"/>
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}

export default App;