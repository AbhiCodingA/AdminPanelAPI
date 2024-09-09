const express = require('express');
const router = express.Router();
const User = require('../../model/User');
// const bcrypt = require('bcrypt');
const session = require('express-session');

// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/admin/auth/login');
    }
}

// Login Route
router.get('/login', (req, res) => {
    res.render('backend/login'); // Ensure you have login.ejs file
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.send('Invalid username or password');
    }

    req.session.user = user;
    res.redirect('/admin');
});

// Logout Route
router.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/admin/auth/login');
});

module.exports = router;
