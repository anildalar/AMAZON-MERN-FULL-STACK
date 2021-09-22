const express = require('express');
const router = express.Router();
const signin = require('../controllers/signin');
const signup = require('../controllers/signup');
const userProfile = require('../controllers/userProfile');
const userMiddleware = require('../middlewares/userMiddleware');

router.post('/signup',signup);
router.post('/signin',signin);
router.get('/getUserInfo',userMiddleware,userProfile);

module.exports = router;