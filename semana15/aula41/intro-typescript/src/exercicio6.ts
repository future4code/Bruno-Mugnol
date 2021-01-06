const chosenYear: number = Number(process.argv[2])
const yearLabel: string = process.argv[3]

enum AgesOfHistory {
    PREHISTORY = "Pré-história",
    ANCIENT = "Idade Antiga",
    MIDDLEAGES = "Idade Média",
    MODERN = "Idade Moderna",
    CONTEMPORARY = "Idade Contemporânea"
}

const agefy = (year: number, label?: string): string => {
    switch (label) {
        case "AC":
            if (year > 4000) {
                return AgesOfHistory.PREHISTORY
            } else {
                return AgesOfHistory.ANCIENT
            }

        default:
            if (year < 476) {
                return AgesOfHistory.ANCIENT
            } else if (year < 1453) {
                return AgesOfHistory.MIDDLEAGES
            } else if (year < 1789) {
                return AgesOfHistory.MODERN
            } else {
                return AgesOfHistory.CONTEMPORARY
            }

    }    
}

console.log(agefy(chosenYear, yearLabel))