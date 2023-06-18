
const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.target.form[0].value) return
    const input = document.getElementById('data').value
    const receiver = Client.formateData(input)

    Client.postData('http://localhost:4000/nlp', receiver)
        .then((res) => Client.injectData(res, receiver))
    e.target.form[0].value = ""
}

export { handleSubmit }
