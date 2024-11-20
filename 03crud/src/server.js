import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Middleware to parse JSON and enable CORS
app.use(bodyParser.json());
app.use(cors());


// Create a MySQL connection using mysql2
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'root',  
  database: 'jsondb',  
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL using mysql2');
});

// API route to insert user data
app.post('/api/users', (req, res) => {
  const users = req.body;  // Users data from the frontend

  let sql = 'INSERT INTO users (id, name, username, email, address, phone, website, company) VALUES ?';
  const values = users.map((user) => [
    user.id,
    user.name,
    user.username,
    user.email,
    `${user.address.street} ${user.address.suite}, ${user.address.city}`,  // Combine address fields
    user.phone,
    user.website,
    user.company.name,
  ]);

  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error inserting data' });
    } else {
      res.status(200).json({ message: 'Data inserted successfully' });
    }
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
