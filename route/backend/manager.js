const express = require('express');
const router = express.Router();
const Manager = require('../../model/Manager'); // Correct path to model

// Route to get the list of managers
router.get('/', async (req, res) => {
    try {
        const managers = await Manager.find(); // Fetch managers from the database
        res.render('manager', { managers }); // Render the view with the managers data
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

module.exports = router;
