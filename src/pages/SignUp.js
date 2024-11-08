import '../styles/auth.css';
import teacher_list from '../data/teachers.json';
import students_list from '../data/students.json';
import icon from '../icon.png';

import {useState} from "react";
function Signup () {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [text, setText] = useState(null);

    return (
        <div class="bg">
            <div class="container">
                <div class="box">
                    <h1><img src={icon} alt="Icon"/>Welcome Back!</h1>
                    
                    <input type="text" class="input-field" placeholder="Username" required/>

                    <input type="password" class="input-field" placeholder="Password" required/>

                    <a class="login-btn" onClick={()=>{
                        if (teacher_list.users[email] === password)
                        {
                            window.location.href="../Dashboard/Teachers";
                            console.log("teacher");
                        }else if(students_list.users[email]===password){
                            window.location.href="../Dashboard/Students";
                            console.log("student");
                        }else{
                            setText("Login failed");
                        }
                    }}>Login</a>

                    <p class="err">{text}</p>

                    <a href="/Auth" class="signup-link">Have an account? Log in</a>
                </div>
            </div>
        </div>
    );
};

export default Auth;