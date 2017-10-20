const express = require('express');

const getAgencies = require('../services/agencies/getAgencies');
const getAgencyById = require('../services/agencies/getAgencyById');

const router = express.Router();

router.get('/', (req, res) => {
  getAgencies()
    .then((agencies) => {
      res.json(agencies);
    })
    .catch(err => err);
});

router.get('/:id', (req, res) => {
  getAgencyById(req.params.id)
    .then((agency) => {
      res.json(agency);
    })
    .catch(err => err);
});

module.exports = router;
