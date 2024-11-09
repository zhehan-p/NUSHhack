let teacherData = require("../src/data/teachers.json")
let studentData = require("../src/data/students.json")

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/teachers", (req, res) => {
  res.json(teacherData);
});

app.get("/students", (req, res) => {
    res.json(studentData);
});

app.post('/students', (req, res) => {
  
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});