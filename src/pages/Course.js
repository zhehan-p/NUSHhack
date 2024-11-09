import { useParams } from "react-router-dom"
import React, {useState} from "react";
import '../styles/Course.css'

export default function Course(){
    const {name} = useParams();

    const [questions, setQuestions] = useState(["first", "second", "last"]);

    return (
        <React.Fragment>
        <header>
            <div class="[course-name]s]">Course Name</div>
            <div class="header-buttons">
                <button onclick="back()">Back</button>
                <button onclick="logout()">Profile</button>
            </div>
        </header>

        <div class="content-container">

            <div class="questions-section">
                <div class="questions-header">
                    <h2>Questions</h2>
                    <div class="header-buttons">
                        <button onclick="addQuestion()">+</button>
                        <button onclick="viewMyQuestions()">My Questions</button>
                    </div>
                </div>

                <ul class="questions-list">
                    {questions.map((value, index) => (
                        <li>
                            <span>Question {index+1}: {value}</span>
                            <button class="attempt-button" onClick={() => window.location.href=`./${name}/question/${index}`}>Attempt</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div class="statistics-section">
                <div class="statistics-header">
                    <h3>Course Statistics</h3>
                </div>
                <div class="statistics-details">
                    <p><strong>Total Questions:</strong> 10</p>
                    <p><strong>Attempts Made:</strong> 5</p>
                    <p><strong>Average Score:</strong> 80%</p>
                </div>
            </div>
        </div>   
        </React.Fragment>   
    )
}