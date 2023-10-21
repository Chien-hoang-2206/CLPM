import regex from "./regex"

export const convertStringToNumber =  (value, delimiter = '.')  => {
    if (value || value === 0) {
        return `${value.toString().replace(regex.formatMoney, delimiter)} Vnđ`
    }
    return '0'
}
