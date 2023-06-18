import { loadHistory } from "../src/client/js/dataRetriever"

describe("Testing the load history from localStorage ", () => {
    test("Testing the loadHistory function", () => {
        const historyItem = {
            type: 'txt',
            value: 'What is it'
        }
        localStorage.setItem("history", JSON.stringify([]));
        document.body.innerHTML = `<div class="results_data"></div>`
        loadHistory(historyItem)
        const history = JSON.parse(localStorage.getItem("history"))
        const element = history.find(item => item.value === historyItem.value)
        expect(element).toMatchObject(historyItem);
    });
})