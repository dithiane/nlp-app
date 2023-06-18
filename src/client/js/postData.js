/**
 * Sends a POST request to the specified URL with the provided data, and returns the response data.
 *
 * @param {string} url - The URL to send the POST request to.
 * @param {Object} data - The data to include in the request body as a JSON object.
 * @return {Promise} - A promise that resolves to the response data as a JSON object.
 */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};
export { postData }