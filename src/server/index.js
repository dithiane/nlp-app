require('dotenv').config()
const { SERVER_PORT } = process.env
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controllers');
const { getAnalysis } = controller;
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
})

app.post('/nlp', getAnalysis)

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
