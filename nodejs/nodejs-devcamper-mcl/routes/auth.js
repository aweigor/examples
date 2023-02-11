const express = require('express');
const { register, login, getMe, forgotPassword, resetPassword } = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/me').get(protect, getMe);
router.route('/forgotpassword').post(forgotPassword);
// todo: setup SMTP
router.put('/resetpassword/:resettoken', resetPassword);


module.exports = router;