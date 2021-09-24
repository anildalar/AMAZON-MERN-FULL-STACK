const express = require('express');
const {createCategory, getCategory}= require('../controllers/admin/category');
const adminMiddleware = require('../middlewares/admin/adminMiddleware');


const router = express.Router();

// api/category/create
//localhost:4000/api/category/create
router.post('/category/create',adminMiddleware,createCategory);
router.get('/category/get',getCategory);

module.exports = router;