const express = require('express');

const getRoutes = require('../services/routes/getRoutes');

const router = express.Router();

async function getAllRoutes(req, res, next) {
  res.locals.routes = await getRoutes()
    .catch(err => next(err));
  next();
}

function returnResponse(req, res) {
  res.status(200).send(res.locals.routes);
}

router.route('/')
  .get(getAllRoutes, returnResponse);

module.exports = router;
