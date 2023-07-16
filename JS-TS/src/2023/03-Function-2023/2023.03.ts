import {StudentType} from "../02-Object-2023/2023.02";
import {CityType, GovernmentBuildingsType} from "../02-Object-2023/2023.02_02";

export const sum = (a: number, b: number) => {
    return a + b
}

function sum2(a: number, b: number) {
    return a + b
}

//const res = sum(sum(1, 2), sum(2, 4))

export const addSkills = (st: StudentType, title: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: title
    })
}

export const changeActive = (st: StudentType, status: boolean) => {
    return status ? st.isActive = true : !st.isActive
}

export const doesStudentLiveInCity = (st: StudentType, city: string) => {
    return st.address.city.title === city
}

//03_02:


export const addMoneyToBudget = (governmentBuilding: GovernmentBuildingsType, money: number) => {
    return governmentBuilding.budget += money
}

