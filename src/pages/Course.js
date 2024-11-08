import '../styles/Course.css';

import React from 'react';

import FetchJSON from '../FetchJSON';

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