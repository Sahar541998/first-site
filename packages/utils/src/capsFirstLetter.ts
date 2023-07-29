const capsFirstLetter = (text: string) => {

    if (text?.length === 0 || text === undefined) {
        return text
    }

    return text.charAt(0).toUpperCase() + text.slice(1)
}

export default capsFirstLetter;