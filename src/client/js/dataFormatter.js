/**
 * Injects data into the Client's history by creating a standardized `data` object
 * from the `response` and `text` arguments and passing it to the `loadHistory` method.
 *
 * @param {Object} response - The response object containing `score_tag`, `agreement`,
 * `subjectivity`, `confidence`, and `irony` properties.
 * @param {string} text - The text entered by the user to be included in the `data` object.
 * @return {void}
 */
const injectData = (response, text) => {
    // Destructure the response object
    const { score_tag: score, agreement, subjectivity, confidence, irony } = response;

    // Create data object with standardized keys
    const data = { text, score, agreement, subjectivity, confidence, irony };

    // Pass data object to loadHistory method
    Client.loadHistory(data);
};

export { injectData }