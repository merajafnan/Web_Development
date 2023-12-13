import passport from 'passport';
import { Strategy } from 'passport-local';
// import axios from 'axios';

const localStrategy = (app2) => {
    try{
        const emailFromDb = db.query("SELECT password FROM encryptUsers WHERE email=$1",[email])
        if (bcrypt.compareSync(plainTextPassword, emailFromDb.rows[0].password)) {
            res.render("secrets")
        }
        else {
            res.status(401).send('Invalid credentials');
        }
    }
    catch (err) {
        console.log(err);
    }
}

export default localStrategy;