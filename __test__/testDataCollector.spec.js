import { formateData } from '../src/client/js/dataCollector';

// Define a test suite for the formateData function.
describe("Checking the function that should return right type of input", () => {
    // Define a test case for the "url" input type.
    test("Testing the formateData on url type", () => {
        // Expect the output of the formateData function to have a type of "url" when given a URL input.
        expect(formateData("http://www.google.com").type).toBe("url")
    })
    // Define a test case for the "text" input type.
    test("Testing the formateData on text type", () => {
        // Expect the output of the formateData function to have a type of "txt" when given a text input.
        expect(formateData("I am human").type).toBe("txt")
    })
});