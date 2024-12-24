const express = require('express');
const router = express.Router();
const Maid = require('../models/Maid');

router.post('/register', async (req, res) => {
    const { name, email, password, experience, services, location, contact } = req.body;

    try {
        const newMaid = await Maid.create({ name, email, password, experience, services, location, contact });
        res.status(201).json(newMaid);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
router.get('/maids', async (req, res) => {
    try {
        const query = `SELECT name, experience, capabilities, contact, location, photo FROM maids LIMIT 10`;
        const [maids] = await db.execute(query);
        res.json(maids);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching maid profiles.');
    }
});
