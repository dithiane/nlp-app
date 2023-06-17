const handleSubmit = (e) => {
    e.preventDefault()
    const input = document.getElementById('data').value
    const receiver = Client.formateData(input)

    Client.postData('http://localhost:4000/nlp', receiver)
        .then((res) => {
            console.log(res)
        })
}

export { handleSubmit }
