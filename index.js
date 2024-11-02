const express = require('express');
const app = express();
const PORT = 5000;
const path = require('path');// instead of import in frontend we use require in backent
app.use(express.static(path.join(__dirname, 'public'))); //static is the middleware
// Sample Data
const students = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

const faculty = [
  { id: 1, name: 'BHARGAVI' },
  { id: 2, name: 'Prof. Green' }
];

const courses = [
  { id: 1, title: 'Mathematics', ltps: 'Lecture and Practical' },
  { id: 2, title: 'Physics', ltps: 'Lecture and Lab' }
];

const feedback = [
  { id: 1, comment: 'Great course!' },
  { id: 2, comment: 'Needs improvement.' }
];

const assignments = [
  { id: 1, title: 'Math Assignment 1' },
  { id: 2, title: 'Physics Lab Report' }
];




// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Route 1: Get student by ID and name
app.get('/students/:id/:name', (req, res) => {
  const studentId = parseInt(req.params.id);
  const studentName = req.params.name;
  const student = students.find(s => s.id === studentId && s.name === studentName);

  if (student) {
    res.json(student);
  } else {
    res.status(404).send('Student not found');
  }
});

// Route 2: Get faculty by ID and name
app.get('/faculty/:id/:name', (req, res) => {
  const facultyId = parseInt(req.params.id);
  const facultyName = req.params.name;
  const facultyMember = faculty.find(f => f.id === facultyId && f.name === facultyName);

  if (facultyMember) {
    res.json(facultyMember);
  } else {
    res.status(404).send('Faculty not found');
  }
});

// Route 3: Display courses and their LTPS
app.get('/courses', (req, res) => {
  res.json(courses);
});

// Route 4: Get feedback
app.get('/feedback', (req, res) => {
  res.json(feedback);
});

// Route 5: Get assignments
app.get('/assignments', (req, res) => {
  res.json(assignments);
});

app.get('/handout', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Handout.pdf'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Profile.jpg'));
});


app.get('/Campus', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'KLU.mp4'));
});

app.get('/Tourofcampus', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'kl.jpg'));
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${5000}`);
});


