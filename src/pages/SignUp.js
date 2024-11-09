import '../styles/Signup.css';
import icon from '../icon.png';

import {useState,useEffect} from "react";

function Signup () {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [cpassword, setCPassword] = useState(null);
    const [text, setText] = useState(null);
    const [student, setStudent] = useState(0);

    const [teacherData, setTeacherData] = useState("");
    const [studentData, setStudentData] = useState("");

    function handle(event) {
        event.preventDefault();
        const fetchOptions = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: `{email:${email}, password:${password}}`
        };
        fetch('http://localhost:8000/students', fetchOptions);
    }

    function handle(message, where) {
        fetch(where, {
            method: "POST", 
            headers: {
               'Content-Type': 'application/json'
            },
            body: message
        }).then(response => response.text())
        .then((text) => {console.log(text)});
    }

    useEffect(() => {
        fetch("http://localhost:8000/teachers")
        .then((res) => res.json())
        .then((data) => setTeacherData(data));
    }, []);
    useEffect(() => {
        fetch("http://localhost:8000/students")
        .then((res) => res.json())
        .then((data) => setStudentData(data));
    }, []);

    return (
        <div class="bg">
            <div class="container">
                <div class="box">
                    <a class="close" href="../NUSHhack">x</a>
                    <h1><img src={icon} alt="Icon"/>Create Account</h1>
                    <input type="text" class="input-field" placeholder="Username" onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="password" class="input-field" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                    <input type="password" class="input-field" placeholder="Confirm Password" onChange={(e) => setCPassword(e.target.value)} required/>
                    <div class="radio-buttons">
                        <input type="radio" id="student" name="role" value={1} onChange={(e) => setStudent(e.target.value)} required/>
                        <label for="student">Student</label>
                        
                        <input type="radio" id="teacher" name="role" value={2} onChange={(e) => setStudent(e.target.value)} required/>
                        <label for="teacher">Teacher</label>
                    </div>

                    <a className="login-btn" onClick={handle}>Create Account</a>

                    <p className="err">{text}</p>

                    <a href="/Auth" className="signup-link">Have an account? Log in</a>
                </div>
            </div>
        </div>
    );
};

export default Signup;