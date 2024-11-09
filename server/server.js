let teacherData = require("../src/data/teachers.json")
let studentData = require("../src/data/students.json")
let courseData = require("../src/data/courses.json")
const fs = require("fs");

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

app.get("/courses",(req,res)=>{
    res.json(courseData)
})



app.post('/students', (req, res) => {
  fs.writeFile('./src/data/students.json', JSON.stringify(req.body), (err) => {
    if (err) throw err;
    console.log('File written successfully');
  });
  res.send("successful");
  studentData = req.body;
});

app.post('/teachers', (req, res) => {
  fs.writeFile('./src/data/teachers.json', JSON.stringify(req.body), (err) => {
    if (err) throw err;
    console.log('File written successfully');
  });
  res.send("successful");
  teacherData = req.body;
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});