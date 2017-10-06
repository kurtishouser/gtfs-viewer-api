const express = require('express');

const app = express();

app.disable('x-powered-by');

const index = require('./src/routes/index');

app.use('/', index);

app.use((req, res) => {
  res.sendStatus(404);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});

module.exports = app;
