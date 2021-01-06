enum ClothingCategory {
    SUMMER = "Summer",
    WINTER = "Winter",
    SWIMSUIT = "Swimsuit",
    UNDERWEAR = "Underwear"
}

type shoppingItem = {
    name: string,
    fullPrice: number,
    category: ClothingCategory
}

type discountedItem = {
    name: string,
    fullPrice: number,
    category: ClothingCategory,
    finalPrice: number
}

const calcDiscount = (products: shoppingItem[]): discountedItem[] => {
    return products.map((item: shoppingItem): discountedItem => {
        switch (item.category) {
            case "Summer":
                return { ...item, finalPrice: item.fullPrice * 0.95 }

            case "Winter":
                return { ...item, finalPrice: item.fullPrice * 0.90 }

            case "Swimsuit":
                return { ...item, finalPrice: item.fullPrice * 0.96 }

            case "Underwear":
                return { ...item, finalPrice: item.fullPrice * 0.93 }
            default:
                return { ...item, finalPrice: item.fullPrice }

        }
    })
}