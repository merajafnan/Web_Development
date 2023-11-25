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
        console.log(result);
    }
    catch (error){
        console.error("Failed to make API request:", error.message);
    }

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
