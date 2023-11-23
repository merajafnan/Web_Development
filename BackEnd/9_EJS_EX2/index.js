
import express from 'express';

const app = express();
const port = 3000;
const d = new Date();
const currentDateTime = d.toLocaleString();
console.log(currentDateTime);
const cars = ["AUDI", "VOLVO", "BMW"];


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
        title: "EJS Tags",
        sec: currentDateTime,
        car: cars,
        content: '<em>This is some em text</em>',
    };
    res.render('pages/index',data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})