import {StudentType} from "../02-Object-2023/2023.02";
import {addSkills, changeActive, doesStudentLiveInCity} from "./2023.03";

let student: StudentType;
beforeEach(() => {
    student = {
        "name": "Andrey",
        "age": 32,
        "isActive": false,
        "Моя Фамилия": "Zaytsev",
        "address": {
            streetTitle: 'Arbat',
            city: {
                title: 'Moscow',
                countryTitle: 'Russia'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'CSS'
            },
            {
                id: 2,
                title: 'HTML'
            },
            {
                id: 3,
                title: 'JS'
            },
            {
                id: 4,
                title: 'React'
            },
        ]
    }
})


test("new tech skill should be added to stusent", () => {
    expect(student.technologies.length).toBe(4)
    addSkills(student, "NodeJS")

    expect(student.technologies.length).toBe(5)
    expect(student.technologies[4].title).toBe("NodeJS")
    expect(student.technologies[4].id).toBeDefined()
})

test("student should be made active", () => {

    expect(student.isActive).toBe(false)
    changeActive(student, true)
    expect(student.isActive).toBe(true)
})

test("does student live in city?", () => {

    let result1 = doesStudentLiveInCity(student, 'Moscow')
    let result2 = doesStudentLiveInCity(student, 'Omsk')

    expect(result1).toBe(true)
    expect(result2).toBe(false)


})
