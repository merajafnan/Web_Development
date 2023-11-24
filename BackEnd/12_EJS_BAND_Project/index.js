import express from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/submit',(req,res) => {
    const brand = ['Audi','BMW','Mercedez','Maruti','Tata'];
    const type = ['SUV','MUV','Sedan','Mini'];

    const randomBrand = brand[Math.floor(Math.random() * brand.length)];
    const randomtType = type[Math.floor(Math.random() * type.length)];

    const data = {
        carBrand: randomBrand,
        carType: randomtType,
    }
    res.render('index',data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})