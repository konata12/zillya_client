// NAME VALIDATION
// everithing exept letters
const nameRegEX = /([^а-яіїєa-z])/i
export const nameValidation = (value) => {
    if (nameRegEX.test(value)) return 'must contain only letters'

    return true
}

// PHONE VALIDATION
const phoneRegEx = /[\D]/
export const phoneValidation = (value) => {
    if (value.length === 0) return true

    if (phoneRegEx.test(value)) return `must contain only digits`

    return true
}

// CITY VALIDATION
// capture only letters, space and -
const cityRegEX = /([^а-яіїєa-z-\s'])/i
export const cityValidation = (value) => {
    if (value.length === 0) return true

    if (cityRegEX.test(value)) return `must contain only letters, space, - and '`

    return true
}

// INDEX VALIDATION
const indexRegEx = /[\D]/
export const indexValidation = (value) => {
    if (value.length === 0) return true

    if (indexRegEx.test(value)) return `must contain only digits`

    return true
}

// STREET VALIDATION
const streetRegEX = /([^а-яіїєa-z-\s'])/i
export const streetValidation = (value) => {
    if (value.length === 0) return true

    if (streetRegEX.test(value)) return `must contain only letters, space, - and '`

    return true
}

// HOUSE VALIDATION
const houseRegEx = /[\D]/
export const houseValidation = (value) => {
    if (value.length === 0) return true

    if (houseRegEx.test(value)) return `must contain only digits`

    return true
}

// APPARTMENT VALIDATION
const apartmentRegEx = /[\D]/
export const apartmentValidation = (value) => {
    if (value.length === 0) return true

    if (apartmentRegEx.test(value)) return `must contain only digits`

    return true
}