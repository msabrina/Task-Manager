//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
// const port = 3000;

const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});


