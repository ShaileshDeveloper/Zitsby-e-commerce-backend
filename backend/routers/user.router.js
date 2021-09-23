const express = require('express');
const router  = express.Router();
const {authUser,  registerUser} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')


router.post('/login' , authUser)

router.post('/register' ,registerUser)
module.exports = router