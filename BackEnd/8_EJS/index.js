import { log } from 'console';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url)); 

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let today = weekday[d.getDay()];
console.log(today);

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    res.render('pages/index',{
        day: today
    });
  });
  

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
  });
  



// app.get('/', (req, res) => {
//     console.log(__dirname);
//     res.sendFile(( __dirname + '/index.html'));
// })


app.listen(port, () => {
  console.log(`EJS listening on port ${port}`)
})