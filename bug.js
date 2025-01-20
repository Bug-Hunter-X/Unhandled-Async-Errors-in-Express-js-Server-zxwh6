const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync()
    .then(() => {
      res.send('Hello from Express!');
    })
    .catch(err => {
      // Error handling is missing here, causing the server to crash without informative logs
      console.error('Unhandled error:', err);
      //This will not send the error to the client
    });
});

async function doSomethingAsync() {
  // Simulate an error scenario
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong!');
  }
  // ... Your asynchronous operation here ...
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});