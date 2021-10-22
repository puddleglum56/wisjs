export const wordToUpperCase = (word : string) => {
    return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase();
}

export const capitalize = (inString : string) => {
    return inString.split(' ').map((word : string) => wordToUpperCase(word)).join(' ')
}