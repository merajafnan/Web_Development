import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("<h1>Welcome to my page</h1>")
  })

app.get('/about', (req, res) => {
res.send("<h3>Meraj Hassan</h3>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})