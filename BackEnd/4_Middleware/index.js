// const express = require('express')
import { log } from 'console';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';


const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url)); 



app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(( __dirname + '/index.html'));
})

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req,res) => {
    console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})