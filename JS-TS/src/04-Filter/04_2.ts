import {CityType, GovernmentBuildingsType} from "../02-Objects/02_02";

export const demolishHousesOnTheStreet = (city: CityType, title: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== title)
}

export const getBuildingsWithCorrentStaffCountThen = (buildings: Array<GovernmentBuildingsType>, staffCount: number) => {
    return buildings.filter(buildings => buildings.staffCount > staffCount)
}


export const getBuildingsWithStaffCountGreaterThen = (building: GovernmentBuildingsType[], staffCount: number) => {
    return building.filter(building => building.staffCount > staffCount)
}