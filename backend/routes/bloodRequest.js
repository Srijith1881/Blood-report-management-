// routes/bloodRequest.js
const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// POST route to handle blood requests
router.post('/blood-request', async (req, res) => {
    try {
        const { name, emergency, location, age, gender, bloodGroup } = req.body;

        // Validate that all fields are provided
        if (!name || !emergency || !location || !age || !gender || !bloodGroup) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Create a new patient record
        const newPatient = new Patient({ name, emergency, location, age, gender, bloodGroup });
        await newPatient.save();

        res.status(201).json({ message: 'Blood request submitted successfully.' });
    } catch (error) {
        console.error('Error submitting blood request:', error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
});

module.exports = router;
