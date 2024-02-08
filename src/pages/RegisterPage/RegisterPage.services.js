// NAME
const nameChar = /([^а-яА-Яa-zA-Z])/

export const nameValidation = (value) => {
    if (nameChar.test(value)) return 'must contain only letters'

    return true
}

// PASSWORD
const englishChar = /([^a-zA-Z0-9])/g
const upperCaseChar = /([A-Z])/
const lowerCaseChar = /([a-z])/
const numberChar = /([0-9])/

export const passwordValidation = (value) => {
    if (value.length < 8) return 'min length 8 char'

    if (englishChar.test(value)) return 'must contain only English letters and numbers'

    if (!upperCaseChar.test(value)) return 'must contain uppercase character'

    if (!lowerCaseChar.test(value)) return 'must contain lowercase character'

    if (!numberChar.test(value)) return 'must contain number'

    return true
}
