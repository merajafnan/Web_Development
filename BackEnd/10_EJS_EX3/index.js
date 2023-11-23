import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
 
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const data = {
        title: "EJS Tutorial",
    }
    res.render('pages/index',data)
})

app.post('/submit',(req,res) => {
    const data = {
        title: "EJS Tutorial",
        numberOfLetter: req.body.fname.length + req.body.lname.length,
    }
    res.render('pages/index',data);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })