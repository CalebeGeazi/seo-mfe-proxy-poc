const express = require('express');
const path = require('path');
const port = 8082
const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('*', (req, res) => {
  json = {
    "path": req.url,
    "query-string-params": req.query,
    "cookies": [req.cookies],
    "request-headers": [req.headers],
    "response-headers": [res.getHeaders()]
  }
  res.type('application/json')
  res.send(JSON.stringify(json))
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})