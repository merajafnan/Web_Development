import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
 
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    
    try{
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        const result = response.data;
        const data = {apiItem: result}
        res.render('./index', data)
    }
    catch (error){
        console.error("Failed to make API request:", error.message);
    }

})

app.post('/',async (req,res) => {
    try {
        console.log(req.body);
        const type = req.body.type;
        const participants = req.body.participants;
        const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`)
        const result = response.data
        console.log(result);
        const data = {
            apiItem: result[Math.floor(Math.random() * result.length)]
        }
        res.render('./index', data)
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("./index", {
          error: "No activities that match your criteria.",
        });
    }
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
