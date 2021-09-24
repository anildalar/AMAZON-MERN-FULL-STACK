const express = require('express');
const router = express.Router();
const signin = require('../controllers/signin');
const signup = require('../controllers/signup');
const userProfile = require('../controllers/userProfile');
const userMiddleware = require('../middlewares/userMiddleware');

const { body,check } = require('express-validator');
const { userValidations ,validateRequest } = require('../validators/userValidation');

router.post('/signup',userValidations,validateRequest,signup);
router.post('/signin',signin);
router.get('/getUserInfo',userMiddleware,userProfile);

module.exports = router;