import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { render } from "ejs";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "admin",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisited() {
  
  const result = await db.query("select country_code from visited_countries");
  let countries = [];
  result.rows.forEach((test) => {
    countries.push(test.country_code)
  });
  return countries
}

app.get("/", async (req, res) => {
  
  const countries = await checkVisited();
  res.render('index.ejs',{countries: countries,total: countries.length})

});

app.post("/add", async(req,res) => {

  const input = req.body["country"];

  try{
      const result = await db.query("SELECT country_code FROM countries WHERE country_name = $1",[input]);
      const countryCode = result.rows[0].country_code;

      try {
            await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)",[countryCode,]);
            res.redirect("/")
      }
      catch (err) {
            console.log(err);
            const countries = await checkVisited();
            res.render('index.ejs',{countries: countries, total: countries.length, error: 'Duplicate Entry, please try again.'})
      }

  }
  catch (err) {
      console.log(err);
      const countries = await checkVisited();
      res.render('index.ejs',{countries: countries, total: countries.length, error: 'Country Name does not exist, please try again.'})
  }

})



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
