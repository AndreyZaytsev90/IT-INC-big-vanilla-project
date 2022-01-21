export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrey Zaytsev", age: 31},
    {name: "Olga Zaytseva", age: 33},
    {name: "Petr Zaytsev", age: 3}
]

const transformator = (man: ManType) => ({
        stack: ["html, css", "JS", "React", "Redux"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
})

const devs = [
    {
        stack: ["html, css", "JS", "React", "Redux"],
        firstName: "Andrey", lastName: "Zaytsev"
    },
    {
        stack: ["html, css", "JS", "React", "Redux"],
        firstName: "Olga", lastName: "Zaytseva"
    },
    {
        stack: ["html, css", "JS", "React", "Redux"],
        firstName: "Petr", lastName: "Zaytsev"
    },
]

let d1 = transformator(people[0])
let d2 = transformator(people[1])
let d3 = transformator(people[2])

const dev2 = [
    transformator(people[0]),
    transformator(people[1]),
    transformator(people[2])
]


const dev3 = people.map(transformator)

const dev4 = people.map(man => ({
    stack: ["html, css", "JS", "React", "Redux"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)

export const createGreetingMessages = (people: Array<ManType>) =>{
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)

}