export const convertToTimestamp = (date:string): number => {
    const [day, month, year] = date.split("/")

    return new Date(`${year}/${month}/${day}`).getTime()
}