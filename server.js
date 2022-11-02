const routes = require('./routes')
const express = require('express');

// const fs = require('fs');


const PORT = 3001;
const app = express()

// Invoke app.use() and serve static files from the '/public' folder
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(routes)


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
