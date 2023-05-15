import {mult, splitIntoWords, sum} from "./01";

//data
let a : number
let b : number
let c : number

beforeEach( () => {
    a = 1
    b = 2
    c = 3
})

test("sum should be correct", () => {
    //action
    const result1 = sum(a,b)
    const result2 = sum(c,b)

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test("multiply should be correct", () => {
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
    expect(result[0]).toBe("h")
    expect(result[1]).toBe("e")

})