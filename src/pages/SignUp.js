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
                        
                        <input type="radio" id="teacher" name="role" value="teacher" required/>
                        <label for="teacher">Teacher</label>
                    </div>
                    <button class="create-btn">Create Account</button>
                    <a href="/Auth" class="signup-link">Already have an account? Sign in</a>
                </div>
            </div>
        </div>
    );
};

export default Signup;