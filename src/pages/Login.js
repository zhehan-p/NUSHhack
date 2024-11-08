import '../styles/Login.css';

import React from 'react';

import FetchJSON from '../FetchJSON';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: "nushhack-bd3ba.firebaseapp.com",
  projectId: "nushhack-bd3ba",
  storageBucket: "nushhack-bd3ba.firebasestorage.app",
  messagingSenderId: "776117645348",
  appId: "1:776117645348:web:9976df6f68e5e6b793a8b1",
  measurementId: "G-KN9FMB51Q9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Login() {
    return (
        <React.Fragment>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
            }}>
                <a href="../NUSHhack"><p style={{
                    verticalAlign: "top",
                    textAlign: "right",
                    paddingRight: "50px",
                    width: "50px",
                    fontSize: 50,
                    color: "#000000"
                }}>x</p></a>
            </div>
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