const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectToDatabase } = require('./db');

// Create an Express app
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true })); // For form data
app.use(express.json()); // For JSON data
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Update path if needed
});

// Handle form submission
app.post('/submit-form', async (req, res) => {
    const { name, email, password, experience, services, location, contact } = req.body;

    try {
        const db = await connectToDatabase();
        const collection = db.collection('maids');

        // Insert form data
        const result = await collection.insertOne({
            name,
            email,
            password, // Hash the password in a real app
            experience,
            services,
            location,
            contact,
        });

        console.log('Form data inserted into MongoDB:', result);
        res.send('Form submitted successfully!');
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Error occurred while submitting the form.');
    }
});

// Fetch all maid profiles
app.get('/get-maids', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const maids = await db.collection('maids').find().toArray(); // Fetch all profiles
        res.status(200).json(maids);
    } catch (error) {
        console.error('Error fetching maid profiles:', error);
        res.status(500).json({ message: 'Failed to fetch maid profiles.' });
    }
});

// // User Signup
// app.post('/user-signup', async (req, res) => {
//     const { name, email, password, services , location } = req.body;

//     try {
//         const db = await connectToDatabase(); // Connect to the database
//         const collection = db.collection('users'); // Use 'users' collection

//         // Insert the user data into the database
//         const result = await collection.insertOne({
//             name,
//             email,
//             password, // Always hash passwords in real applications
//             services,
//             location,
//         });

//         console.log('User data inserted into MongoDB:', result);
//         res.status(200).send('User signed up successfully!');
//     } catch (error) {
//         console.error('Error inserting user data:', error);
//         res.status(500).send('Error occurred while signing up.');
//     }
// });

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});