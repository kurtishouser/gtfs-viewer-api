const express = require('express');
const cors = require('cors');

const app = express();

app.disable('x-powered-by');

const index = require('./src/routes/index');
const routes = require('./src/routes/routes');
const agencies = require('./src/routes/agencies');

app.use(cors());

app.use('/', index);
app.use('/routes', routes);
app.use('/agencies', agencies);

app.use((req, res) => {
  res.sendStatus(404);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});

module.exports = app;
