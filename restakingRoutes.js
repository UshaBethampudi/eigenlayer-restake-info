const express = require('express');
const router = express.Router();
const { getRestakers } = require('../controllers/restakingController');

// Main API route
router.get('/', getRestakers);

// 🔧 Optional Test Route
router.get('/test', (req, res) => {
  res.send('✅ Restaking route is working!');
});

module.exports = router;
