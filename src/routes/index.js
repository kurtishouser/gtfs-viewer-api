const express = require('express');
const cors = require('cors');

const router = express.Router();

router.use(cors());

router.get('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
