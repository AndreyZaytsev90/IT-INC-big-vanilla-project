import {StudentType} from "../02-Objects/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: "Andrey",
        age: 31,
        isActive: false,
        address: {
            streetTitle: "Lipchanskogo, 1",
            city: {
                title: "Moscow",
                countryTitle: "Russia"

            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML/CSS"
            },
            {
                id: 2,
                title: "JavaScript"
            },
            {
                id: 3,
                title: "React"
            }
        ]
    }
})


test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, "Redux");

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("Redux")
    expect(student.technologies[3].title).toBeDefined()
})

test("does student live in city?", () => {

    let result1 = doesStudentLiveIn (student, "Minsk")
    let result2 = doesStudentLiveIn (student, "Moscow")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})