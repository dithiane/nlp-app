
const loadHistory = (newInput = null) => {
    const results = document.querySelector('.results_data')
    results.innerHTML = ''
    const history = JSON.parse(localStorage.getItem("history")) || []
    if (newInput) history.push(newInput)

    history.forEach((item, i) => {
        const collector = document.createElement('tr')
        const input = document.createElement('td')

        input.className = 'input'
        const score = document.createElement('td')
        score.className = 'score'
        const agreement = document.createElement('td')
        agreement.className = 'agreement'
        const subjectivity = document.createElement('td')
        subjectivity.className = 'subjectivity'
        const confidence = document.createElement('td')
        confidence.className = 'confidence'
        const irony = document.createElement('td')
        irony.className = 'irony'
        collector.append(input, score, agreement, subjectivity, confidence, irony);

        [...collector.children].map(tag => {
            if (tag.className === 'input') {
                if (item[tag.className]?.type === 'url') tag.innerHTML = `<a href='${item[tag.className].value}'>${item[tag.className].value}</a>`
                else tag.textContent = item[tag.className]?.value
            }
            else tag.textContent = item[tag.className]
        })

        results.append(collector);
    })

    if (newInput) localStorage.setItem("history", JSON.stringify(history));
}

export {
    loadHistory
}