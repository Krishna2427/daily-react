const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Import cors
const bodyParser = require('body-parser');

const app = express();

// Enable CORS for all origins
app.use(cors()); // This allows requests from any origin

app.use(bodyParser.json());

// Create connection to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'studentsDB'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Route to insert student data
app.post('/addStudent', (req, res) => {
  const student = req.body;
  const sql = 'INSERT INTO students (name, age, class) VALUES (?, ?, ?)';
  db.query(sql, [student.name, student.age, student.class], (err, result) => {
    if (err) {
      console.error(err); // Log the error for debugging
      return res.status(500).send('Failed to add student'); // Send a response with error status
    }
    res.send('Student added successfully');
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
