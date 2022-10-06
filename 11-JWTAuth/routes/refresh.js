const express = require('express');
const router = express.Router();
const refreshTokenController = require('../controllers/authController');

router.get('/', authController.handleRefreshToken);

module.exports = router;