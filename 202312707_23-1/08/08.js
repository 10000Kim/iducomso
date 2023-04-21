const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/login', (req, res) => {
  res.send('Login Page');
});

app.get('/user', (req, res) => {
  res.send('User Page');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

const answer = `
`;
console.log(answer);