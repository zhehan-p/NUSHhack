import '../styles/auth.css';
import teacher_list from '../data/teachers.json';
import students_list from '../data/students.json';

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
        <div class="container">
            <h2 class="header">Authentication</h2>

            <div class="inputContainer">
                <input
                    class="input"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    class="input"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div class="buttonContainer">
                <button class="button" onClick={signIn}>Sign In</button>
            </div>
        </div>
    );
};

export default Auth;