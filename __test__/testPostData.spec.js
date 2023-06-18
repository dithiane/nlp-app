import { postData } from "../src/client/js/postData";

// Define a test suite for the postData function.
describe("Testing the fetching functionality ", () => {
    // Define a test case for the postData function.
    test("Testing the postData function", () => {
        // Expect the postData function to be defined.
        expect(postData).toBeDefined();
    });
});