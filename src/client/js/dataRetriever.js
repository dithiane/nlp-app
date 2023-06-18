/**
 * Loads history data and displays it in a table.
 *
 * @param {object} newInput - the new input to add to the history (optional)
 * @return {void} nothing is returned from this function
 */
const loadHistory = (newInput = null) => {
    // Select the results table element and clear its contents
    const results = document.querySelector('.results_data')
    results.innerHTML = ''

    // Load the history from local storage or create an empty array
    const history = JSON.parse(localStorage.getItem('history')) || []

    // If there's a new input, add it to the history and update local storage
    if (newInput) {
        history.push(newInput)
        localStorage.setItem('history', JSON.stringify(history))
    }

    // Loop through each history item and create a row in the results table
    history.forEach(item => {
        // Create a new row element
        const collector = document.createElement('tr')

        // Add empty cells for each column in the row
        collector.innerHTML = `
        <td class="input"></td>
        <td class="score"></td>
        <td class="agreement"></td>
        <td class="subjectivity"></td>
        <td class="confidence"></td>
        <td class="irony"></td>
    `

        // Get references to each cell in the row
        const [input, score, agreement, subjectivity, confidence, irony] = collector.children

        // If the input is a URL, create a link to it, otherwise just set the text content
        if (item.input?.type === 'url') {
            input.innerHTML = `<a href="${item.input.value}">${item.input.value}</a>`
        } else {
            input.textContent = item.input?.value
        }

        // Set the text content of the other cells to the corresponding values in the history item
        score.textContent = item.score
        agreement.textContent = item.agreement
        subjectivity.textContent = item.subjectivity
        confidence.textContent = item.confidence
        irony.textContent = item.irony

        // Append the row to the results table
        results.append(collector)
    })
}

export {
    loadHistory
}