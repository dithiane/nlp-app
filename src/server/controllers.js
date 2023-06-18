const { API_ID, BASE_URL } = process.env
const fetch = require('node-fetch');

module.exports = {
    /**
     * Retrieves analysis data from the API based on the given type and value.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    getAnalysis: async (req, res) => {
        const { type, value } = req.body; // destructure type and value from request body
        const url = `${BASE_URL}?key=${API_ID}&lang=auto&${type}=${value}`; // construct URL with parameters
        try {
            const response = await fetch(url); // make API request
            const data = await response.json(); // parse response as JSON
            res.status(200).json(data); // send response data back to client
        } catch (error) {
            res.status(500).json(error)
            throw error; // re-throw error to be caught by error handler middleware
        }
    }
}