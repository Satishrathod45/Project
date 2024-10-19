const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/post-job', jobController.postJob);

module.exports = router;