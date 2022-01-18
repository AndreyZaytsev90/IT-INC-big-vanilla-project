import {CityType} from "../02-Objects/02_02";
import {addMoneyToBudget} from "./03";


let city: CityType

beforeEach(() => {
    city = {
        title: "Moscow",
        houses: [
            {
                buildedAt: 2013, repaired: false,
                address: {number: 1, street: {title: "Lipchanskogo"}}
            },
            {
                buildedAt: 1980, repaired: false,
                address: {number: 8, street: {title: "Sormovskaya"}}
            },
            {
                buildedAt: 1969, repaired: false,
                address: {number: 4, street: {title: "Uralskaya"}}
            }],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 1000,
                address: {
                    street: {
                        title: "Nedorubova"
                    }
                }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "Dmitrievsky"
                    }
                }
            }],
        citizensNumber: 12000000
    }
})

test("budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)

})

test("budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)

})


