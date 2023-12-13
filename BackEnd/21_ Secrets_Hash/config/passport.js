import passport from 'passport';

// require('./strategies/local.strategy')(); //Or whatever strategy you are using
import app2 from "./strategies/local.strategy.js";

const passportConfig = (app1) => {

    console.log("inside passportConfig");
    
    //Telling our app to use passport for dealing with our sessions
    app.use(passport.initialize());
    app.use(passport.session()); 
    
    // stores user to session
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    // retrieves user from session
    passport.deserializeUser((user, done) => {
        done(null, user);
    });

};

export default passportConfig;