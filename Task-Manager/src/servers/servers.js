import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "taskmanager"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed" + err.stack);
    return;
  }
  console.log("Connected to mysql database");
});

// POST route to add task
app.post('/add-task', (req, res) => {
  const { name, assignee, progress, roles } = req.body;

  const sql = `INSERT INTO tasks (name, assignee, progress, role) VALUES (?, ?, ?, ?)`;

  db.query(sql, [name, assignee, progress, JSON.stringify(roles)], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send("Task added successfully");
  });
});

// Start the server
const port = 5002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
