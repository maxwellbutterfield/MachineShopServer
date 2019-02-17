// import packages that we need (and have installed) from the package.json
const express = require('express');
const bodyParser = require('body-parser');

// here we're initalizing the express app
const app = express();

// then setting up the local server for testing
// the process.env.~ stuff means these settings will adopt the settings of
// the server you set this up on - at work on heroku, for example
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 7890;
app.set('port', port);

// bodyParser is for making it easier to decode JSON objects sent in over HTTP
app.use(bodyParser.json());

// add routes


// run the server
app.listen(port, () => {
  console.log("API SERVER");
  console.log(`Running on port ${port}`);
  console.log("Enter Ctrl + C to stop");
});
