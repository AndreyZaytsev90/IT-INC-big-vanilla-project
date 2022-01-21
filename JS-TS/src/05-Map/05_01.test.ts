import {createGreetingMessages, ManType} from "./05_01";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "Andrey Zaytsev", age: 31},
        {name: "Olga Zaytseva", age: 33},
        {name: "Petr Zaytsev", age: 3}
        ]

})

test("should get array greeting messages", () =>{
    const messages = createGreetingMessages(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andrey. Welcome to IT-Incubator")
    expect(messages[1]).toBe("Hello Olga. Welcome to IT-Incubator")
    expect(messages[2]).toBe("Hello Petr. Welcome to IT-Incubator")
})