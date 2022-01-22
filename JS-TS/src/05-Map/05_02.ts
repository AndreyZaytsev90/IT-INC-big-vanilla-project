import {GovernmentBuildingsType, HouseType} from "../02-Objects/02_02";

export const getStreetsTitlesOfGovenmentBuildins = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(buildings => buildings.address.street.title)
}


export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(house => house.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(house => `Putin Huy!, sad from ${house.address.street.title}` )
}