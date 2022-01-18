import {StudentType} from "../02-Objects/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02-Objects/02_02";

debugger
export const sum = (a: number, b: number) => {
    return a + b
}

const res = sum(sum(1, 2), sum(1, 3))


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true;
}

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName;
}

export const addMoneyToBudget = (governmentBuildings: GovernmentBuildingsType, budget: number) => {
    governmentBuildings.budget += budget
}

export const repairHouses = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (governmentBuilding: GovernmentBuildingsType, staffCount: number) => {
    governmentBuilding.staffCount -= staffCount
}
export const toHireStaff = (governmentBuilding: GovernmentBuildingsType, staffCount: number) => {
    governmentBuilding.staffCount += staffCount
}

export const createMessage = (props: CityType) => {
    //return "Hello " + props.title + ". I want to be happy all " + props.citizensNumber + " men!"
    return `Hello ${props.title}. I want to be happy all ${props.citizensNumber} men!`

}