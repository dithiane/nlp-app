/**
 * Takes in a string input and formats it into an object with a 'type' and 'value' key.
 * If the input is a URL, the object's 'type' key is set to 'url'. Otherwise, it is set to 'txt'.
 * @param {string} input - The input string to format.
 * @returns {Object} - An object with a 'type' key (either 'url' or 'txt') and a 'value' key (the formatted input string).
 */
const formatData = (input) => {
    // Trim the input string to remove any leading/trailing white space.
    const trimmedInput = input.trim();

    // Check if the input string is a URL using a regular expression.
    const isUrl = /^https?:\/\/\S+$/.test(trimmedInput);

    // Set the object's 'type' key based on whether the input is a URL or not.
    const type = isUrl ? 'url' : 'txt';

    // Return the formatted object with both the 'type' and 'value' keys.
    return { type, value: trimmedInput };
}
export { formatData }
