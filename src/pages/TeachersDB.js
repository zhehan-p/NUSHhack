import '../styles/TDashboard.css'
import React, {useState,useEffect} from 'react';
import Popup from 'reactjs-popup';
import icon from '../icon.png'
import { useParams } from 'react-router-dom';

function TeachersDB({username}){

    const [courses, setCourses] = useState([]);
    const [name, setName] = useState(null);
    const [passkey, setPasskey] = useState(null);
    const [CPasskey, setCPasskey] = useState(null);
    const [text, setText] = useState(null);
    const [courseData,setCourseData] = useState({course: []});
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
        .then((data) => {setCourseData(data); return data})
        .then((data) => setCourses([...data.course]));
    }, []);

    const newCourse = (title)=>{
        var name = "";
        for (var i = 0; i < courses.length; i++)
        {
            if (courses[i][0] === title)
                name = courses[i][1];
        }

        return (
        <li>
            <span>{name}</span>
            <div class="course-actions">
                <button onclick="editCourse(1)">Edit</button>
                <button onClick={()=>{
                    var a = courses;
                    var index = -1;
                    for (var i = 0; i < a.length; i++)
                    {
                        if (a[i][0] === title)
                            index = i;
                    }
                    if (index > -1) {
                        a.splice(index, 1);
                    }
                    setCourses([...a]);
                    setCourseData({course: [...a]});
                    handle(JSON.stringify({course: [...a]}), "http://localhost:8000/courses");
                }}>Delete</button>
            </div>
        </li>);
    }

    const {user} = useParams();
    return (
        <React.Fragment>
        <header>
            <h2>Welcome, {user}</h2>
            <div class="header-buttons">
                <button onclick="profile()">Profile</button>
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
                                            <h1><img src={icon} alt="Icon"/>Create Course</h1>
                                            <input type="text" class="input-field" placeholder="Name" required onChange={(e)=>setName(e.target.value)}/>
                                            <input type="password" class="input-field" placeholder="Passkey" required onChange={(e)=>setPasskey(e.target.value)}/>
                                            <input type="password" class="input-field" placeholder="Confirm Passkey" required onChange={(e)=>setCPasskey(e.target.value)}/>
                                            <p class="err">{text}</p>
                                            <button class="create-btn" onClick={()=>{
                                                var taken = false;
                                                for (var i = 0; i < courses.length; i++)
                                                    if (courses[i][0] === passkey)
                                                        taken = true;
                                                if (taken)
                                                {
                                                    setText("Passkey is already taken");
                                                }
                                                else
                                                {
                                                    taken = false;
                                                    for (var i = 0; i < courses.length; i++)
                                                        if (courses[i][1] === name)
                                                            taken = true;
                                                    if (taken)
                                                    {
                                                        setText("Name is already taken");
                                                    }
                                                    else{
                                                        var course = courseData.course;
                                                        console.log(course);
                                                        course.push([passkey, name]);
                                                        var jsonText = JSON.stringify({course: course});
                                                        handle(jsonText, "http://localhost:8000/courses");
                                                        setCourses([...course]);
                                                        setCourseData({course: course});
                                                        close();
                                                    }
                                                }
                                            }}>Create Course</button>
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
                    {courses.map(([pass,name],index) => newCourse(pass))}
                </ul>
            </div>
        </div>
        </React.Fragment>
    )
    
}
export default TeachersDB;