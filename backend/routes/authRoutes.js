const express = require('express');
const {registerUser, loginUser, getUserProfile} = require('../controllers/authController.js')
const {protect} = require('../middlewares/authMiddleware.js')

const router = express.Router();

//Auth Routes
router.post('/register',registerUser); //Register User
router.post('/login',loginUser) // Login User
router.get('/profile',protect,getUserProfile) //Get user Profile

module.exports = router;