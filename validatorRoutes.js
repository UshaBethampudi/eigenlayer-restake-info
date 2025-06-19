const express = require('express');
const router = express.Router();
const { getValidators } = require('../controllers/validatorController');

// Main API route
router.get('/', getValidators);

// 🔧 Optional Test Route
router.get('/test', (req, res) => {
  res.send('✅ Validators route is working!');
});

module.exports = router;
