import { formateData } from '../src/client/js/dataCollector';

describe("Checking the function that should return right type of input", () => {
    test("Testing the formateData on url type", () => {
        expect(formateData("http://www.google.com").type).toBe("url")
    })
    test("Testing the formateData on text type", () => {
        expect(formateData("I am human").type).toBe("txt")
    })
});