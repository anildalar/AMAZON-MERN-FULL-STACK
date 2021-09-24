const express = require('express');
const router = express.Router();
const signin = require('../../controllers/admin/signin');
const signup = require('../../controllers/admin/signup');
const adminProfile = require('../../controllers/admin/adminProfile');
const adminMiddleware = require('../../middlewares/admin/adminMiddleware');

const { body,check } = require('express-validator');
const { adminValidations ,validateRequest } = require('../../validators/admin/adminValidation');

router.post('/admin/signup',signup);
router.post('/admin/signin',signin);
router.get('/admin/getAdminInfo',adminMiddleware,adminProfile);

module.exports = router;