import { postData } from "../src/client/js/postData";

describe("Testing the fetching functionality ", () => {
    test("Testing the postData function", () => {
        expect(postData).toBeDefined();
    });
});