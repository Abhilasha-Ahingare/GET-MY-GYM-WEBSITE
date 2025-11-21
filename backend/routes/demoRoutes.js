const express = require('express');
const {
  createDemo,
  getDemos,
  getDemo,
  updateDemo,
  getDemoStats
} = require('../controllers/demoController');

const router = express.Router();

// Public routes
router.post('/', createDemo);

// Protected routes (add authentication middleware later)
router.get('/', getDemos);
router.get('/stats', getDemoStats);
router.get('/:id', getDemo);
router.put('/:id', updateDemo);

module.exports = router;