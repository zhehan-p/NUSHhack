import '../styles/TDashboard.css'
import React, {useState,useEffect} from 'react';
import Popup from 'reactjs-popup';
import icon from '../icon.png'
import { useParams } from 'react-router-dom';

function StudentsDB(){
    const [userData, setUserData] = useState(["",[]]);
    const [name, setName] = useState(null);
    const [passkey, setPasskey] = useState(null);
    const [CPasskey, setCPasskey] = useState(null);
    const [text, setText] = useState(null);
    const [courseData,setCourseData] = useState({course: []});
    var studentData = {users:{}};
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
        fetch("http://localhost:8000/courses")
        .then((res) => res.json())
        .then((data) => setCourseData(data));
    }, []);
    useEffect(() => {
        fetch("http://localhost:8000/students")
        .then((res) => res.json())
        .then((data) => {setUserData(data.users[user]); studentData = data});
    }, []);

    const newCourse = (title)=>{
        var name = "";
        for (var i = 0; i < courseData.course.length; i++)
        {
            if (courseData.course[i][0] === title)
                name = courseData.course[i][1];
        }

        return (
        <li>
            <span>{name}</span>
            <div class="course-actions">
                <button onClick={()=>window.location.href=`../../QuestionList/${name}`}>Attempt</button>
            </div>
        </li>);
    }

    const {user} = useParams();
    console.log(useParams());
    return (
        <React.Fragment>
        <header>
            <h2>Welcome, {user}</h2>
            <div class="header-buttons">
                <button onClick={() => {
                    window.location.href="../../NUSHhack";
                    var a = studentData.users;
                    delete a[user];
                    handle(JSON.stringify({users: a}), "http://localhost:8000/students");
                }}>Delete Account</button>
                <button onClick={() => window.location.href="../../NUSHhack"}>Logout</button>
            </div>
        </header>
        <div class="dashboard">
            <div class="welcome-section">
                <h1>Welcome to Your Dashboard</h1>
            </div>
            <div class="courses-section">
                <div class="courses-section-header">
                    <h3>My Courses</h3>
                    <Popup trigger=
                        {<button class="add-course-button"> + </button>} 
                        modal nested>
                        {
                            close => (
                                <div className='modal'>
                                    <div class="container">
                                        <div class="box">
                                            <p class="close" onClick={()=>close()}>x</p>
                                            <h1><img src={icon} alt="Icon"/>Enter Course</h1>
                                            <input type="password" class="input-field" placeholder="Passkey" required onChange={(e)=>setPasskey(e.target.value)}/>
                                            <p class="err">{text}</p>
                                            <button class="create-btn" onClick={()=>{
                                                if (userData[1].indexOf(passkey) > -1)
                                                {
                                                    setText("Already registered for this course.");
                                                }
                                                else
                                                {
                                                    var exists = false;
                                                    for (var i = 0; i < courseData.course.length; i++)
                                                        if (courseData.course[i][0] === passkey)
                                                            exists = true;
                                                    if (!exists)
                                                    {
                                                        setText("Course does not exist!");
                                                    }
                                                    else
                                                    {
                                                        var a = userData[1];
                                                        a.push(passkey);
                                                        setUserData([userData[0], a]);
                                                        studentData.users[user] = [userData[0], a];
                                                        handle(JSON.stringify(studentData), "http://localhost:8000/students");
                                                        close();
                                                    }
                                                }
                                            }}>Enter Course</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Popup>
                </div>
                
                <div class="search-bar">
                    <input type="text" placeholder="Search courses..."/>
                    <button>Search</button>
                </div>
                
                <ul class="course-list">
                    {userData[1].map((pass,index) => newCourse(pass))}
                </ul>
            </div>
        </div>
        </React.Fragment>
    )
    
}
export default StudentsDB;