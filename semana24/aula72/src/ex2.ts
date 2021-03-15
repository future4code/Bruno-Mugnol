const compressString = (str: string): string => {
    const compressedStringArray: string[] = []
    let letterCount = 0

    str.split("").forEach((char, index) => {
        if (char !== str[index - 1]) {
            // If current character is different to the previous one, reset count
            letterCount = 0
        }

        if (char !== str[index + 1]) {
            // If current character is different to the next one, add one to count, push to array
            letterCount++
            compressedStringArray.push(char, String(letterCount))
        } else {
            // If current character has an equal as next one, add one to count
            letterCount++
        }
    })

    if (str.length > compressedStringArray.join("").length) {
        return compressedStringArray.join("")
    } else return str
}


console.log(compressString("aabbb")) // a6b2
console.log(compressString("aabcccccaaa")) // a2b1c5a3
console.log(compressString("accurate")) // accurate
console.log(compressString("escola")) // escola
console.log(compressString("accuraaaaaaaaaate")) // a1c2u1r1a10t1e1