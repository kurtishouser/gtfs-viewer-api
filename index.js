const express = require('express');
const cors = require('cors');

const app = express();

app.disable('x-powered-by');

const index = require('./src/routes/index');
const agencies = require('./src/routes/agencies');
const routes = require('./src/routes/routes');
const directions = require('./src/routes/directions');
const services = require('./src/routes/services');
const shapes = require('./src/routes/shapes');

app.use(cors());

app.use('/', index);
app.use('/agencies', agencies);
app.use('/routes', routes);
app.use('/directions', directions);
app.use('/services', services);
app.use('/shapes', shapes);

app.use((req, res) => {
  res.sendStatus(404);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});

module.exports = app;
