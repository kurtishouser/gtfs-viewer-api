const express = require('express');

const getAgencies = require('../services/agencies/getAgencies');

const router = express.Router();

async function getAllAgencies(req, res, next) {
  res.locals.agencies = await getAgencies()
    .catch(err => next(err));
  next();
}

function returnResponse(req, res) {
  res.status(200).send(res.locals.agencies);
}

router.route('/')
  .get(getAllAgencies, returnResponse);

module.exports = router;
