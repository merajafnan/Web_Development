import { log } from 'console';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import morgan from 'morgan';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url)); 

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.sendFile(( __dirname + '/index.html'));
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})