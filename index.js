const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Vishalad!!! ;) ');
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
})