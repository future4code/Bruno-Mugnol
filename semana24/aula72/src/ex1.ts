const checkIfOneEdit = (original: string, edited: string): boolean => {
    if (Math.abs(original.length - edited.length) >= 2) {
        // If there was more than one addition or removal
        return false
    }

    let mismatchCount: number = 0

    switch (original.length - edited.length) {
        case 0:
            // Same characters count: character replaced case

            for (let i = 0; i < original.length; i++) {
                if (original[i] !== edited[i]) {
                    mismatchCount++
                }
            }

            if (mismatchCount === 1) {
                // Only one replaced character
                return true
            } else break


        case 1:
            // Original string has 1 more character: character removed case

            for (let i = 0; i < edited.length; i++) {
                if (original[i] !== edited[i] && original[i + 1] !== edited[i]) {
                    mismatchCount++
                }
            }

            if (mismatchCount === 0) {
                // No replaced characters - only a removal
                return true
            } else break


        case -1:
            // Original string has 1 less character: character added case

            for (let i = 0; i < original.length; i++) {
                if (edited[i] !== original[i] && edited[i + 1] !== original[i]) {
                    mismatchCount++
                }
            }

            if (mismatchCount === 0) {
                // No replaced characters - only an addition
                return true
            } else break

        default:
            break
    }

    return false
}

console.log(checkIfOneEdit("banana", "banan")) // true
console.log(checkIfOneEdit("banana", "bananaa")) // true
console.log(checkIfOneEdit("banana", "bananaaa")) // false
console.log(checkIfOneEdit("banana", "bananna")) // true
console.log(checkIfOneEdit("banana", "banaa")) // true
console.log(checkIfOneEdit("banana", "banaga"))  // true
console.log(checkIfOneEdit("banana", "banagaa"))  // false
console.log(checkIfOneEdit("banana", "panaga"))  // false