const express = require('express');
const router = express.Router();
const viewController = require('../controllers/userController');
const jobController = require('../controllers/jobController');

router.post('/register', viewController.SignUp);
router.get('/verify-email', viewController.verifyEmail);
router.post('/post-job', jobController.postJob);




module.exports = router;