import {mult, splitIntoWords, sum} from "./01";


test("sum should be correct", () => {
    //data
    const a = 1
    const b = 2
    const c = 3

    //action
    const result1 = sum(a,b)
    const result2 = sum(c,b)

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test("multiply should be correct", () => {
    //data
    const a = 1
    const b = 2
    const c = 3

    //action
    const result1 = mult(a,b)
    const result2 = mult(c,b)

    //expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test("split into words should be correct", () => {
    //data
    const sentence = "Hello Andrey"

    //action
    const result = splitIntoWords(sentence)

    //expect result
    expect(result[0]).toBe("Hello")
    expect(result[1]).toBe("Andrey")

})