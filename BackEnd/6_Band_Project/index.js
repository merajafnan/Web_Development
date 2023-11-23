
import { log } from 'console';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url)); 
var bandName = '';

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req,res,next){
    console.log(req.body);
    bandName = req.body["street"] + req.body["pet"]
    console.log(bandName);
    next();
}

app.use(bandNameGenerator);

app.get('/', (req, res) => {
    res.sendFile(( __dirname + '/index.html'));
})

app.post('/submit',(req,res) => {
  res.send(bandName);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})