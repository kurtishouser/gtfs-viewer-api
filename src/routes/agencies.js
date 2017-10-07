const express = require('express');

const getAgencies = require('../services/agencies/getAgencies');
const getAgencyById = require('../services/agencies/getAgencyById');

const router = express.Router();

async function getAllAgencies(req, res, next) {
  res.locals.agencies = await getAgencies()
    .catch(err => next(err));
  next();
}

async function getOneAgency(req, res, next) {
  res.locals.agency = await getAgencyById(req.params.id)
    .catch(err => next(err));
  next();
}

function returnResponse(req, res) {
  if (res.locals.agencies) {
    return res.status(200).send(res.locals.agencies);
    // return res.json(res.locals.agencies);
  }
  if (res.locals.agency) {
    return res.status(200).send(res.locals.agency);
  }
  return res.sendStatus(404);
}

router.route('/')
  .get(getAllAgencies, returnResponse);

router.route('/:id')
  .all(getOneAgency)
  .get(returnResponse);

module.exports = router;
