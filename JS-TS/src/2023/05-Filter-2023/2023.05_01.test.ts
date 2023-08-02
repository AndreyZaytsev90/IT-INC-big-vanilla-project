import {createGreetingMessages, ManType2023} from "./2023.05_01";

let newPeople: ManType2023[]

beforeEach(() => {
        newPeople = [
            {name: 'Andrey Zaytsev', age: 33},
            {name: 'Olga Zaytseva', age: 35},
            {name: 'Petr Zaytsev', age: 4}
        ]
    }
)

test('should get array greeting messages', () => {

    const messages2023  = createGreetingMessages(newPeople)

    expect(messages2023.length).toBe(3)
    expect(messages2023[0]).toBe(`Hello Andrey. Welcome to home!`)
    expect(messages2023[1]).toBe(`Hello Olga. Welcome to home!`)
    expect(messages2023[2]).toBe(`Hello Petr. Welcome to home!`)

})