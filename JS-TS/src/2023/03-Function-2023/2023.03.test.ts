import {StudentType} from "../02-Object-2023/2023.02";
import {addSkills} from "./2023.03";

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