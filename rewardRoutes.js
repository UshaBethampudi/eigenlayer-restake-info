const express = require('express');
const router = express.Router();
const { getRewards } = require('../controllers/rewardController');

// Main API route
router.get('/', getRewards);

// 🔧 Optional Test Route
router.get('/test', (req, res) => {
  res.send('✅ Rewards route is working!');
});

module.exports = router;
