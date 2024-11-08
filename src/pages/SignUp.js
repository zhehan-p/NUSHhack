import '../styles/Signup.css';
import teacher_list from '../data/teachers.json';
import students_list from '../data/students.json';
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

    useEffect(() => {
        fetch("http://localhost:8000/teacher")
        .then((res) => res.json())
        .then((data) => setTeacherData(data.message));
    }, []);
    useEffect(() => {
        fetch("http://localhost:8000/student")
        .then((res) => res.json())
        .then((data) => setStudentData(data.message));
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

                    <a className="login-btn" onClick={()=>{
                        if (teacher_list.users.hasOwnProperty(email)||students_list.users.hasOwnProperty(email))
                        {
                            setText("Email was taken");
                        }else if(password !== cpassword){
                            setText("Passwords do not match");
                        } else{
                            console.log(student);
                            if (student == 1) {
                                window.location.href="../Dashboard/Students";
                                var studentUsers = students_list.users;
                                studentUsers[email] = password;
                                var jsonText = JSON.stringify({users: studentUsers});
                            }
                            else if (student == 2) {
                                window.location.href="../Dashboard/Teachers";
                                var teacherUsers = teacher_list.users;
                                teacherUsers[email] = password;
                                var jsonText = JSON.stringify({users: teacherUsers});
                            } else if (student == 0) {
                                setText("Please select if you are a student or teacher");
                            }
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