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


app.get("/", async (req, res) => {
  
  const result = await db.query("select country_code from visited_countries");
  let countries = [];
  
  result.rows.forEach((test) => {
    countries.push(test.country_code)
  });
  
  res.render('index.ejs',{countries: countries,total: countries.length})
  
  console.log(result);
  console.log(result.rows);
  console.log(countries);
  db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
