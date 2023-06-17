const { API_ID, BASE_URL } = process.env
const fetch = require('node-fetch');

module.exports = {
    getAnalysis: async (req, res) => {
        const { type, value } = req.body
        const url = `${BASE_URL}?key=${API_ID}&lang=auto&${type}=${value}`
        console.log(url)
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            res.status(200).json(data)
        } catch (error) {
            console.log('error', error);
            throw error;
        }
    }
}