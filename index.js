const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.disable('x-powered-by');

const index = require('./src/routes/index');
const agencies = require('./src/routes/agencies');
const routes = require('./src/routes/routes');
const types = require('./src/routes/types');
const directions = require('./src/routes/directions');
const services = require('./src/routes/services');
const shapes = require('./src/routes/shapes');
const allShapes = require('./src/routes/allShapes');

app.use(cors());

app.use('/', index);
app.use('/agencies', agencies);
app.use('/routes', routes);
app.use('/types', types);
app.use('/directions', directions);
app.use('/services', services);
app.use('/shapes', shapes);
app.use('/allshapes', allShapes);

app.use((req, res) => {
  res.sendStatus(404);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});

module.exports = app;
