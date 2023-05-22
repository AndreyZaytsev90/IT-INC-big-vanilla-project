import {StudentType} from "../02-Object-2023/2023.02";

export const sum = (a: number, b: number) => {
    return a + b
}

//const res = sum(sum(1, 2), sum(2, 4))

export const addSkills = (st: StudentType, title: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: title
    })
}