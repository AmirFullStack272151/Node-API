require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('amir khan');
});

app.get('/auth', (req, res) => {
  res.send('good morning bro');
});

app.get('/login', (req, res) => {
  res.send('login page');
});

app.get('/signup', (req, res) => {
  res.send('<h1> today i am exhausted </h1>');
});

app.get('/logic', (req, res) => {
  res.send('logic page');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
