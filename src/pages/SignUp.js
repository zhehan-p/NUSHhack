import '../styles/auth.css';
import teacher_list from '../data/teachers.json';
import students_list from '../data/students.json';
import icon from '../icon.png';

import {useState} from "react";
function Signup () {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [cpassword, setCPassword] = useState(null);
    const [text, setText] = useState(null);

    return (
        <div class="bg">
            <div class="container">
                <div class="box">
                    <h1><img src={icon} alt="Icon"/>Welcome Back!</h1>
                    
                    <input type="text" class="input-field" placeholder="Username" onChange={(e) => setEmail(e.target.value)} required/>

                    <input type="password" class="input-field" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>

                    <input type="password" class="input-field" placeholder="Confirm Password" onChange={(e) => setCPassword(e.target.value)} required/>

                    <div class="radio-buttons">
                        <input type="radio" id="student" name="role" value="student" required/>
                        <label for="student">Student</label>
                        
                        <input type="radio" id="teacher" name="role" value="teacher" required/>
                        <label for="teacher">Teacher</label>
                    </div>

                    <a class="login-btn" onClick={()=>{
                        if (teacher_list.users.hasOwnProperty(email)||students_list.users.hasOwnProperty(email))
                        {
                            setText("Email was taken");
                        }else if(password !== cpassword){
                            setText("Passwords do not match");
                        }

                    }}>Create Account</a>

                    <p class="err">{text}</p>

                    <a href="/Auth" class="signup-link">Have an account? Log in</a>
                </div>
            </div>
        </div>
    );
};

export default Signup;