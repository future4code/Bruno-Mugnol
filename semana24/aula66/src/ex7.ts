// 7.
const findFirstCapitalizedChar = (str: string): string => {
    return str[0] === str[0].toUpperCase() && str[0] !== " "
        ? str[0]
        : findFirstCapitalizedChar(str.substring(1))
}

console.log(findFirstCapitalizedChar("olá tudo bem Como é q vc vai?"))