const dataHolder = {
}

const injectData = (res, input) => {

    dataHolder.input = input
    dataHolder.score = res.score_tag
    dataHolder.agreement = res.agreement
    dataHolder.subjectivity = res.subjectivity
    dataHolder.confidence = res.confidence
    dataHolder.irony = res.irony;

    Client.loadHistory(dataHolder)

}

export { injectData }