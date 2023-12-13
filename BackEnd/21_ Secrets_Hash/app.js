//jshint esversion:6

import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import pg from "pg";
import { log } from 'console';
import bcrypt from 'bcrypt';
import session from 'express-session';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import ConnectPg from 'connect-pg-simple';
import app1 from "./config/passport.js";




const pgSession = ConnectPg(session);
const app = express();
const port = 3000;
const saltRounds = 10;
// require('./src/config/passport')(app);

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
      CREATE TABLE IF NOT EXISTS encryptUsers (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(1000) NOT NULL
      );
      CREATE TABLE IF NOT EXISTS sessions (
            sid VARCHAR(255) PRIMARY KEY,
            sess json NOT NULL,
            expire TIMESTAMPTZ NOT NULL
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


// ################# initializing our session #################

app.use(session({
    store: new pgSession({pool: db,tableName: 'sessions'}),
    secret: "My little Secret",
    resave: false,
    saveUninitialized: false
}));




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

// #################a Register Users & Passwod with Encryption #################

app.post("/register",async (req,res) => {
    const email = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        try { 
            db.query("INSERT INTO encryptUsers (email,password) VALUES ($1,$2)",[email,hash]);
            res.render("secrets")
        }
        catch (err) {
            console.log(err);
        }
    });


});

// #################a Login Users #################

app.post("/login", async(req,res) => {

        const email= req.body.username;
        const password= req.body.password;

        passport.authenticate("local")(req, res, function(){
            res.redirect("/secrets");
        });
    

    

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



