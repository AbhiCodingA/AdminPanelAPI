const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session'); 
const managerRoute = require('./route/backend/manager'); // Correct path

dotenv.config({ path: './config.env' });

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.urlencoded({ extended: true }));

// Session Setup
app.use(session({
    secret: 'your-secret-key', // Use a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 } // 1-day session expiry
}));

// Middleware to pass session data to views
app.use((req, res, next) => {
    res.locals.user = req.session.user; // Pass the user data to every template
    next();
});

// Use Routes
app.use('/admin/manager', managerRoute);

// Import Routes
const adminroute = require('./route/backend/admin');
const pageroute = require('./route/backend/page');
const authroute = require('./route/backend/auth'); // Import the auth route for login/logout

// Use Routes
app.use('/admin', adminroute);
app.use('/admin/page/', pageroute);
app.use('/admin/auth', authroute); // Use auth route for handling login/logout

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
