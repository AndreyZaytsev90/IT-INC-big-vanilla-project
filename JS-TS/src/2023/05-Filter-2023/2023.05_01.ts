import {ManType} from "../../05-Map/05_01";

export type ManType2023 = {
    name: string
    age: number
}

const newPeople: ManType2023[] = [
    {name: 'Andrey Zaytsev', age: 33},
    {name: 'Olga Zaytseva', age: 35},
    {name: 'Petr Zaytsev', age: 4}
]

const transformator2023 = (man: ManType) => ({
    stack: ["html, css", "JS", "React", "Redux"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})

const newDevs = [
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

const newDev2 = newPeople.map(transformator2023)


const newDev3 = newPeople.map(man => ({
    stack: ["html, css", "JS", "React", "Redux"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

export const createGreetingMessages = (newPeople: ManType2023[]) => {
    return newPeople.map(man => {
            return `Hello ${man.name.split(' ')[0]}. Welcome to home!`
        }
    )
}














