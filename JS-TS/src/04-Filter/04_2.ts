import {CityType} from "../02-Objects/02_02";

export const demolishHousesOnTheStreet = (city: CityType, title: string) => {
    return city.houses = city.houses.filter(house => house.address.street !== title)
}