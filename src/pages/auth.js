import '../styles/auth.css';
import icon from '../icon.png';
import { useEffect,useState } from 'react';

function Auth () {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [text, setText] = useState(null);
    const [teacherData, setTeacherData] = useState("");
    const [studentData, setStudentData] = useState("");

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
                    <h1><img src={icon} alt="Icon"/>Welcome Back!</h1>
                    
                    <input type="text" class="input-field" placeholder="Username" onChange={(e) => setEmail(e.target.value)} required/>

                    <input type="password" class="input-field" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>

                    <a class="login-btn" onClick={()=>{
                        if (teacherData.users[email] === password)
                        {
                            window.location.href=`../Dashboard/Teachers/${email}`;
                            console.log("teacher");
                        }else if(students_list.users[email].password === password){
                            window.location.href=`../Dashboard/Students/${email}`;
                            console.log("student");
                        }else{
                            setText("Login failed");
                        }
                    }}>Login</a>

                    <p class="err">{text}</p>

                    <a href="/Signup" class="signup-link">No account? Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Auth;