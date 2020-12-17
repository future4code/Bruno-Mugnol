// Funções
// Exercício 1
const reverseText = (text) => {
    return text.split("").reverse().join("")
}
//console.log(reverseText("texto"))

// Exercício 2
const verifyPalindrome = (text) => {
    const normalText = text.replace("-", "").split(" ").join("").toLowerCase()
    const reversedText = reverseText(normalText)
    return normalText === reversedText
}
// console.log(verifyPalindrome("socorram-me subi no onibus em marrocos"))

// Exercício 3
const getAllCombinations = (string) => {
    const outputArray = []
    const splitString = string.split("")

    const getAllSubsets = (array) => {
        return array.reduce(
            (subsets, value) => {
                return subsets.concat(subsets.map(set => [...set, value]))
            }
            ,
            [[]]
        )
    }

    getAllSubsets(splitString).forEach((subset) => {
        outputArray.push(subset.join(""))
    })

    outputArray.splice(0, 1)

    return outputArray.join(", ")
}

// console.log(getAllCombinations("pão"))

// Exercício 4
const sortStringAlphabetically = (string) => {
    return string.toLowerCase().split("").sort().join("")
}

//console.log(sortStringAlphabetically("abcdefghijklmnopqrstuvwxyzkmasfbAgDAghJAAOGFUSAGJUHFBPAHFQWKNB"))

// Exercício 5
const capitalizeFirstLetters = (string) => {
    const outputArray = []
    const splitString = string.split(" ")

    for (let word of splitString) {
        word = word[0].toUpperCase() + word.substring(1).toLowerCase()
        outputArray.push(word)
    }

    return outputArray.join(" ")
}
// console.log(capitalizeFirstLetters("fala meu good"))

// Exercício 6
const printLargestWord = (string) => {
    const splitString = string.split(" ")
    let maxWord = ""

    splitString.forEach((word) => {
        if (maxWord.length < word.length) {
            maxWord = word
        }
    })

    return maxWord
}
//console.log(printLargestWord("o astrodev é malvado pra dedéu, tunumachamermão?"))

// Exercício 7
const countVowel = (string) => {
    return string.split("").reduce((vowelCount, letter) => {
        if (letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u") {
            return vowelCount + 1
        } else {
            return vowelCount + 0
        }
    }, 0)
}
// console.log(countVowel("Exemplo"))

// Exercício 8
const findSecondsWithSort = (numbersArray) => {
    const noRepetitionsArray = numbersArray.filter((num, i, numArray) => {
        return i === numArray.indexOf(num)
    })
    if (noRepetitionsArray.length >= 4) {
        noRepetitionsArray.sort((a, b) => a - b)
        const secondMin = noRepetitionsArray[1]
        const secondMax = noRepetitionsArray[noRepetitionsArray.length - 2]
        return [secondMin, secondMax].join(", ")
    } else {
        alert("Seu array é muito pequeno")
    }
}
// console.log(findSecondsWithSort([-2, 1, 3, 5, 5, 15, -5, 15, -2, -5]))

// Exercício 9
const removeRepetitions = (string) => {
    const newArray = string.split("").filter((char, i, charArray) => {
        return i === charArray.indexOf(char)
    })
    return newArray.join("")
}
// console.log(removeRepetitions("thequickbrownfoxjumpsoverthelazydog"))

// Exercício 10
const countLetters = (string) => {
    const letterCountObject = string.split("").reduce((lettersObject, char) => {
        if (lettersObject[char]) {
            return { ...lettersObject, [char]: lettersObject[char] + 1 }
        } else {
            return { ...lettersObject, [char]: 1 }
        }
    }, {})

    const outputArray = []
    for (let letter in letterCountObject) {
        outputArray.push(`${letterCountObject[letter]} ${letter}`)
    }

    return outputArray.join(", ")
}
// console.log(countLetters("bananada"))

// -------------------------------------------- \\

// Laços
// Exercício 1
const returnMaximum = (arrayOfNumbers) => {
    let max = -Infinity
    arrayOfNumbers.forEach((number) => {
        if (max < number) {
            max = number
        }
    })
    return max
}
// console.log(returnMaximum([1, 3, 9, 5 , 2, 7]))

// Exercício 2
const returnLargestString = (arrayOfStrings) => {
    let largest = ""
    arrayOfStrings.forEach((string) => {
        if (largest.length < string.length) {
            largest = string
        }
    })
    return largest
}
// console.log(returnLargestString(["Casa", "Elefante", "Espelho", "Internacional"]))

// Exercício 3
const sortArray = (arrayOfNumbers) => {
    return arrayOfNumbers.sort((a, b) => a - b)
}
// console.log(sortArray([3, 27, 12]))

// Exercício 4
const sortAndPrintMax = (arrayOfNumbers) => {
    arrayOfNumbers.sort((a, b) => a - b)
    alert(`Maior número do array é: ${arrayOfNumbers[arrayOfNumbers.length - 1]}`)
    return arrayOfNumbers
}
// console.log(sortAndPrintMax([3, 27, 12]))

// Exercício 5
const verifyDivisibilityBy2And3 = () => {
    for (let i = 0; i <= 30; i++) {
        if (i !== 0 && !(i % 2) && !(i % 3)) {
            console.log(`${i} é par e divisível por 3.`)
        } else if (i === 0 || !(i % 2)) {
            console.log(`${i} é par.`)
        } else if (!(i % 3)) {
            console.log(`${i} é divisível por 3.`)
        }
    }
}
// verifyDivisibilityBy2And3()

// Exercício 6
const drawPyramid = (material, height) => {
    let printedString = ""
    for (let i = 0; i < height; i++) {
        printedString += `${material}`
        console.log(printedString)
    }
}
// drawPyramid("*", 5)

// Exercício 7
const scores = {
    Soter: 80,
    Paula: 77,
    Caio: 88,
    Amanda: 95,
    Mateus: 68
}

const gradeAtoE = (scoreObject) => {
    let gradesObject = {}
    for (let student in scoreObject) {
        let grade
        if (scoreObject[student] > 90) {
            grade = "A"
        } else if (scoreObject[student] > 80) {
            grade = "B"
        } else if (scoreObject[student] > 60) {
            grade = "C"
        } else if (scoreObject[student] > 40) {
            grade = "D"
        } else if (scoreObject[student] > 30) {
            grade = "E"
        } else {
            grade = "F"
        }

        gradesObject = { ...gradesObject, [student]: grade }
    }

    return gradesObject
}
// console.log(gradeAtoE(scores))