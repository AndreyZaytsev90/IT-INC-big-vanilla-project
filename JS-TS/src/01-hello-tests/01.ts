export const sum = (a: number, b: number) => a + b;

export const mult = (a: number, b: number) => a * b;

export function splitIntoWords(sentense: string) {
    const words = sentense.toLowerCase().split(" ")

    return words.filter(word => word !== "")
        .map(word => word.replace("!", ""))
}