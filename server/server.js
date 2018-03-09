const express = require('express');
const app = express();
const data = require('./config/data');


app.get('/api/products', (req, res) => {
  res.json(data);
});

const port = 5000;

app.listen(port, () => {
    console.log(`The server is started on ${port} port`);
});
