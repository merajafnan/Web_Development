//jshint esversion:6

import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import pg from "pg";
import { log } from 'console';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// ################# Initialize postgreSQL #################

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "admin",
    port: 5432,
  });

db.connect();

// ################# Create Table in postgreSQL #################

const createTable = async () => {
	const query = `
      CREATE TABLE IF NOT EXISTS test (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `;
    try {
        await db.query(query);  // sends query
    } 
    catch (err) {
        console.log(err);
    }
};

createTable()
.then(() => console.log('New table created!'))
.catch(error => console.log(error.stack));

// #################a app.get in JS #################

app.get("/", (req,res) => {
    res.render("home");
});

app.get("/login", (req,res) => {
    res.render("login");
});

app.get("/register", (req,res) => {
    res.render("register");
});

// #################a Register Users #################

app.post("/register",async (req,res) => {
    const email = req.body.username;
    const password = req.body.password;

    try { 
        await db.query("INSERT INTO test (email,password) VALUES ($1,$2)",[email,password]);
        res.render("secrets")
    }
    catch (err) {
        console.log(err);
    }
});

// #################a Login Users #################

app.post("/login", async(req,res) => {
    const email = req.body.username;
    const password = req.body.password;

    try {
        const result = await db.query("SELECT * FROM test WHERE email=$1 AND password=$2",[email,password] )
        console.log(result.rowCount);
        const userCount = result.rowCount;

        if (userCount > 0) {
            res.render("secrets");
        }
        else {
            res.status(401).send('Invalid credentials');
        }

        
    }
    catch (err) {
        console.log(err);
    }

})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



