export default function Course(){
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
                    <li>
                        <span>Question 1</span>
                        <button class="attempt-button" onclick="attemptQuestion(1)">Attempt</button>
                    </li>
                    <li>
                        <span>Question 2</span>
                        <button class="attempt-button" onclick="attemptQuestion(2)">Attempt</button>
                    </li>
                    <li>
                        <span>Question 3</span>
                        <button class="attempt-button" onclick="attemptQuestion(3)">Attempt</button>
                    </li>
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