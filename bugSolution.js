const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    await doSomethingAsync();
    res.send('Hello from Express!');
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).send('Something went wrong!');
  }
});

async function doSomethingAsync() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong!');
  }
  // ... Your asynchronous operation here ...
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});