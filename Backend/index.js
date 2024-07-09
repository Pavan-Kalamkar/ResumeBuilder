const ConnectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

ConnectToMongo();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/api/personal',require('./Routes/personal'));

app.listen(port, () => {
  console.log(`resume builder app listening on port ${port}`)
})