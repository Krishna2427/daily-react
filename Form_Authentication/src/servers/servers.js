const express= require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt   = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const RORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'auth_db'
})
db.connect(err=>{
    if(err){
        console.error('Database connection failed', err);
    }else{
        console.log('Connected to the database');
    }
});

db.query(
    `CREATE TABLE IF NOT EXIST users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(225) NOT NULL,
    password VARCHAR(225) NOT NULL
    )`,
    err=>{
        if(err){
           console.error(err);
        }
    }
);

// register Endpoint
app.post('/register', async(req, res)=>{
    const {username, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const query = `INSERT INTO users(username, password) values(?,?)`;
    db.query(query, [username, hashPassword], (err, result)=>{
        if(err) return res.status(500).send('Error registering user');
        res.status(201).send('User registered successfully');
    });
})

//Login Endpoint

app.post('/login',(req, res)=>{
    const {username, password} = req.body;
    const query = 'SELECT * FROM users where username = ?';
    db.query(query, [username], async(err, result)=>{
        if(err) return res.status(500).send('Database error');
        if(result.length === 0) return res.status(401).send('User not found');

        const user = result[0];
        const match = await bcrypt.compare(password, user.password);
        if(!match){
            return res.status(403).send('Invalid credential');

        const tocken = jwt.sign({id:user.id, username:user.username}, 'secretkey', {
            expiresIn:'1h'
        });
        res.json({tocken});
        }
    })
})

// Protected Route
app.get('/protected', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(' ')[1];
    jwt.verify(token, 'secretKey', (err, user) => {
        if (err) return res.sendStatus(403);
        res.send(`Hello, ${user.username}`);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

