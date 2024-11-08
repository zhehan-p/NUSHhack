import '../styles/TDashboard.css'
import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import icon from '../icon.png'

function TeachersDB(){
    function profile() {
        alert("Profile button clicked");
    }

    function logout() {
        alert("Logout button clicked");
    }

    function addCourse() {
        alert("Add Course button clicked");
    }

    function editCourse(courseId) {
        alert("Edit button clicked for Course " + courseId);
    }

    function deleteCourse(courseId) {
        alert("Delete button clicked for Course " + courseId);
    }

    const [courses, setCourses] = useState([]);
    const [name, setName] = useState(null);
    const [passkey, setPasskey] = useState(null);
    const [CPasskey, setCPasskey] = useState(null);
    const [text, setText] = useState(null);

    const newCourse = (title)=>(
        <li>
            <span>{title}</span>
            <div class="course-actions">
                <button onclick="editCourse(1)">Edit</button>
                <button onClick={()=>{
                    var a = courses;
                    const index = a.indexOf(title);
                    if (index > -1) {
                        a.splice(index, 1);
                    }
                    setCourses([...a]);
                }}>Delete</button>
            </div>
        </li>
    )

    return (
        <React.Fragment>
        <header>
            <h2>Welcome, [Name]</h2>
            <div class="header-buttons">
                <button onclick="profile()">Profile</button>
                <button onclick="logout()">Logout</button>
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
                                                if (courses.indexOf(name) > -1)
                                                {
                                                    setText("Name is already taken");
                                                }
                                                else
                                                {
                                                    setCourses([...courses,name]);
                                                    close();
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
                    {courses.map((value, index) => (newCourse(value)))}
                </ul>
            </div>
        </div>
        </React.Fragment>
    )
    
}
export default TeachersDB;