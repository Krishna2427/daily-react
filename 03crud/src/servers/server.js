
const express = require("express");
const mysql   = require("mysql2");
const cors    = require("cors");
const app     = express();


app.use(cors());
const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'root',
    database:'posts'
});

db.connect(err=>{
    if(err){
        console.error("Error: connecting to Mysql:", err);
        return;
    }
    console.log("Connected to mysql");
    
})
app.get()

