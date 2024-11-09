import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import '../styles/Question.css';

function Question() {
    const {name, id} = useParams();

    const [body, setBody] = useState("");
    const [optionText, setOptionText] = useState("");
    const [options, setOptions] = useState([]);

    var inputElements = document.getElementsByClassName('messageCheckbox');
    var checked = [];

    return (
    <React.Fragment>
    <header>
        <div class="course-name">Course {name} Question {id+1}</div>
        <div class="header-buttons">
            <button onclick="goBack()">Back</button>
        </div>
    </header>

    <div class="content-container">
        <div class="question-section">
            <div class="question-header">What is JavaScript?</div>
            <div class="question-description">
                <input type="text" class="input-field" onChange={(e) => setBody(e.target.value)}/>
            </div>
            <div class="answers-section">
                <h3>Choose the correct option:</h3>
                <div class="mcq-options">
                    <textarea id="longAnswer" rows="5" cols="50" placeholder="Write your answer here..." onChange={(e) => {setOptionText(e.target.value); setOptions(optionText.split('\n')); console.log(options)}}/>
                    <br/>
                    {options.map((value, index) => (
                        <React.Fragment>
                            <input class="messageCheckbox" type="checkbox" id={`option${index+1}`} name="answer" value={index} onChange={() => {
                                if (checked.indexOf(index) > -1)
                                {
                                    checked.splice(checked.indexOf(index), 1);
                                }
                                else
                                {
                                    checked.push(index);
                                }
                            }}/> 
                            <label for={`option${index+1}`}>{value}</label><br/>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <button class="submit-button" onclick="submitAnswer()">Submit Answer</button>
        </div>
        <div class="explanation-section" id="explanation">
            <div class="explanation-header">
                <h2>Explanation</h2>
                <button class="toggle-button" onclick="toggleExplanation()">Show</button>
            </div>
            <div id="explanation-content" style={{display: "none"}}>
                <p>
                    JavaScript was developed by Brendan Eich at Netscape Communications in 1995. It was originally named Mocha, then changed to LiveScript, and finally to JavaScript.
                </p>
            </div>
        </div>
    </div>
    </React.Fragment>
    );
}

export default Question;