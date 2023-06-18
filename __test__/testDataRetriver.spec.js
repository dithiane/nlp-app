import { loadHistory } from "../src/client/js/dataRetriever"

// Define a test suite for the loadHistory function.
describe("Testing the load history from localStorage ", () => {
    // Define a test case for the loadHistory function.
    test("Testing the loadHistory function", () => {
        // Define a mock history item to use for testing.
        const historyItem = {
            type: 'txt',
            value: 'What is it'
        }
        // Clear any existing history items from localStorage.
        localStorage.setItem("history", JSON.stringify([]));
        // Create a dummy element for the results data.
        document.body.innerHTML = `<div class="results_data"></div>`
        // Call the loadHistory function with the mock history item.
        loadHistory(historyItem)
        // Retrieve the updated history from localStorage.
        const history = JSON.parse(localStorage.getItem("history"))
        // Find the history item that matches the mock item.
        const element = history.find(item => item.value === historyItem.value)
        // Expect the found history item to match the mock item.
        expect(element).toMatchObject(historyItem);
    });
});