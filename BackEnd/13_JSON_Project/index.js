import express from 'express';
import bodyParser from 'body-parser';
// Use to import JSON
import json from "./recipe.json" assert { type: "json" };
 
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('./index')
})

app.post('/recipe',(req,res) => {

    if (req.body.choice == 'chicken') {
        // Always use below JSON structure to pass data otherwise it will not work
        const data =  { recipeName: json[0] }  
        res.render('./index',data)
    }

    if (req.body.choice == 'beef') {
        const data =  { recipeName: json[1] }
        res.render('./index',data)
    }

    if (req.body.choice == 'fish') {
        const data =  { recipeName: json[2] }
        res.render('./index',data)
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })