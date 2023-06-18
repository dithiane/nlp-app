// Import required modules
require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controllers');
const { getAnalysis } = controller;

// Create an express app
const app = express();

// Configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

// Define routes
app.get('/', (req, res) => {
    // Construct the path to the index.html file
    const indexPath = path.join(__dirname, '../dist/index.html');
    // Send the index.html file
    res.sendFile(indexPath);
});

app.post('/nlp', getAnalysis);

// Start the server
const { SERVER_PORT } = process.env;
app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
