/**
 * Handles the form submission by preventing default behavior, getting the input value, 
 * trimming whitespace, formatting the input data, sending a POST request to the server, 
 * clearing the input field, and injecting the data into the DOM.
 *
 * @param {Event} e - The form submission event.
 * @return {void} This function does not return anything.
 */
const handleSubmit = (e) => {
    // prevent default form submission behavior
    e.preventDefault()

    // get input value and trim whitespace
    const input = document.getElementById('data').value.trim()

    // if there is no input, return early
    if (!input) return

    // format input data
    const receiver = Client.formatData(input)

    // send POST request to server and get promise
    Client.postData('http://localhost:4000/nlp', receiver)
        .then((res) => Client.injectData(res, receiver))

    // clear input field
    e.target.form[0].value = ""
}

export { handleSubmit }
