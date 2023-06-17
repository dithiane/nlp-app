
const formateData = (input) => {
    const trimmedInput = input.trim();
    const receiver = { type: '', value: trimmedInput };
    const isUrl = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(trimmedInput);
    receiver.type = isUrl ? 'url' : 'txt';
    return receiver;
}
export { formateData }
