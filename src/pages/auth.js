import '../styles/auth.css';
import teacher_list from '../data/teachers.json';
import students_list from '../data/students.json';
import icon from '../icon.png';

import {useState} from "react";
import { browserHistory } from 'react-router';
function Auth () {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <div class="bg">
            <div class="container">
                <div class="box">
                    <h1><img src={icon} alt="Icon"/>Welcome Back!</h1>
                    
                    <input type="text" class="input-field" placeholder="Username" onChange={(e) => setEmail(e.target.value)} required/>

                    <input type="password" class="input-field" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>

                    <a class="login-btn" onClick={()=>{
                        console.log(teacher_list.users);
                        console.log(email);
                        if (teacher_list.users[email]["password"] == password)
                        {
                            window.location.href="../Dashboard/Teachers";
                            console.log("teacher");
                        }else if(students_list.users[email]["password"] == password){
                            window.location.href="../Dashboard/Students";
                            console.log("student");
                        }else{
                            <text>Login Failed</text>
                            console.log("l bozo");
                        }
                    }}>Login</a>

                    <a href="/Signup" class="signup-link">No account? Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Auth;