const express = require('express');
const handleDrip = require('../services/drip');
const router = express.Router();

router.post('/drip', (req, res, next) => {
  handleDrip(req.body)
    .then((response) => res.status(200).json(response))
    .catch((err) => next(err || {}));
});

module.exports = router;
