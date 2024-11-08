import '../styles/Signup.css';
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
                    <a class="close" href="../NUSHhack">X</a>
                    <h1><img src={icon} alt="Icon"/>Create Account</h1>
                    <input type="text" class="input-field" placeholder="Username" required/>
                    <input type="password" class="input-field" placeholder="Password" required/>
                    <input type="password" class="input-field" placeholder="Confirm Password" required/>
                    <div class="radio-buttons">
                        <input type="radio" id="student" name="role" value="student" required/>
                        <label for="student">Student</label>
                        
                        <input className="radio-buttons-input" type="radio" id="teacher" name="role" value="teacher" required/>
                        <label className="radio-buttons-label" htmlFor="teacher">Teacher</label>
                    </div>

                    <a className="login-btn" onClick={()=>{
                        if (teacher_list.users.hasOwnProperty(email)||students_list.users.hasOwnProperty(email))
                        {
                            setText("Email was taken");
                        }else if(password !== cpassword){
                            setText("Passwords do not match");
                        }

                    }}>Create Account</a>

                    <p className="err">{text}</p>

                    <a href="/Auth" className="signup-link">Have an account? Log in</a>
                </div>
            </div>
        </div>
    );
};

export default Signup;