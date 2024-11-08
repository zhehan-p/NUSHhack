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
        <div className="bg">
            <div className="container">
                <div className="box">
                    <h1><img src={icon} alt="Icon"/>Welcome Back!</h1>
                    
                    <input type="text" className="input-field" placeholder="Username" onChange={(e) => setEmail(e.target.value)} required/>

                    <input type="password" className="input-field" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>

                    <input type="password" className="input-field" placeholder="Confirm Password" onChange={(e) => setCPassword(e.target.value)} required/>

                    <div className="radio-buttons">
                        <input className="radio-buttons-input" type="radio" id="student" name="role" value="student" required/>
                        <label className="radio-buttons-label" htmlFor="student">Student</label>
                        
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