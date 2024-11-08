import '../styles/auth.css';
import teacher_list from '../data/teachers.json';
import students_list from '../data/students.json';
import icon from '../icon.png';

import {useState} from "react";

const Auth = () => {
    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);

    const signIn = () => {
        if (teacher_list.users[email] == password)
        {
            
        }else if(students_list.users[email]==password){
            
        }else{
            
        }
    }

    return (
        <div class="bg">
            <div class="container">
                <div class="box">
                    <h1><img src={icon} alt="Icon"/>Welcome Back!</h1>
                    
                    <input type="text" class="input-field" placeholder="Username" required/>

                    <input type="password" class="input-field" placeholder="Password" required/>

                    <button class="login-btn">Login</button>

                    <a href="/Signup" class="signup-link">No account? Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Auth;