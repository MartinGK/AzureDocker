
'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  let url = require('url');
  let queryData = url.parse(req.url, true).query;
  if (queryData.name) {
    // user told us their name in the GET request, ex: http://host:8000/?name=Martin
    res.send('Hello ' + queryData.name + '\n');
  } else {
    res.send("Hello World\n");
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);