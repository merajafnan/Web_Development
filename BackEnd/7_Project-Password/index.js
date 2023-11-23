import { log } from 'console';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import { nextTick } from 'process';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url)); 
var correctPassword = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req,res,next) {
    if (req.body.password == 'admin') {
        correctPassword = true;
    }
    next();
}

app.use(passwordCheck);

app.get('/', (req, res) => {
    res.sendFile(( __dirname + '/index.html'));
})

app.post('/check',(req,res) => {
    if (correctPassword) {

        res.sendFile(__dirname + '/secret.html');
        correctPassword = false;
    }
    else {
        res.sendFile(( __dirname + '/index.html'));
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})