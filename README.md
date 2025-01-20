# Unhandled Async Errors in Express.js Server

This repository demonstrates a common issue in Express.js applications: unhandled errors within asynchronous middleware. When an error occurs in an async function used within a route handler, the server might crash without providing informative error messages.

## Bug Description
The `bug.js` file shows an Express.js server with an asynchronous route handler.  A simulated asynchronous operation (`doSomethingAsync`) has the potential to throw an error. The current error handling is insufficient; it only logs the error to the console but doesn't gracefully handle it or send an appropriate response to the client, causing a server crash. 

## Solution
The `bugSolution.js` file demonstrates the solution using a proper `try...catch` block within the asynchronous function and a more robust error handling mechanism within the Express route handler. This ensures that errors are caught, logged comprehensively, and an appropriate response is sent to the client. This prevents server crashes and provides better debugging information.