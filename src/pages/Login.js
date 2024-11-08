import '../styles/Login.css';

import React from 'react';

import FetchJSON from '../FetchJSON';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
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

function Login() {
    return (
        <React.Fragment>
            <div class="loginbody"/>
            <div class="container">
                <div class="box">
                    <h1>Welcome Back!</h1>
                    <select>
                        <option value="">Select School...</option>
                        <FetchJSON/>
                    </select>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;