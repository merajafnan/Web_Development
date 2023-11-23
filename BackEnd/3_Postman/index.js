import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.post('/signUp', (req, res) => {
    // res.send('POST request to the homepage')
    res.sendStatus(201);
  })

app.put('/details', (req, res) => {
    res.send('PUT request to the homepage')
})

app.patch('/details', (req, res) => {
    res.send('Patch request to the homepage')
})

app.delete('/userID', (req, res) => {
    res.send('Delete request to the homepage')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})