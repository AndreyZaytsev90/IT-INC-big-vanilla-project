import {CityType} from "../02-Objects/02_02";

import {demolishHousesOnTheStreet} from "./04_2";
import {addMoneyToBudget, createMessage, repairHouses, toFireStaff, toHireStaff} from "../03-Function/03";


let city: CityType

beforeEach(() => {
    city = {
        title: "Moscow",
        houses: [
            {
                id: 1, buildedAt: 2013, repaired: false,
                address: {number: 1, street: {title: "Lipchanskogo"}}
            },
            {
                id: 2, buildedAt: 1980, repaired: false,
                address: {number: 8, street: {title: "Sormovskaya"}}
            },
            {
                id: 3, buildedAt: 1969, repaired: false,
                address: {number: 4, street: {title: "Uralskaya"}}
            }],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
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
test("houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Uralskaya")

    expect(city.houses.length).toBe(2)
    expect(city.houses[0].id).toBe(1)
    expect(city.houses[1].id).toBe(2)
})




test.skip("budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)

})

test.skip("budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)

})

test.skip("houses should be repaired", () => {
    repairHouses(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy()
})

test.skip("staff should be reduced", () => {
    toFireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test.skip("staff should be increased", () => {
    toHireStaff(city.governmentBuildings[0], 20)
    toHireStaff(city.governmentBuildings[1], 100)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
    expect(city.governmentBuildings[1].staffCount).toBe(1100)
})

test.skip("greeting message should be correct for city", () => {
    const message = createMessage(city)

    expect(message).toBe("Hello Moscow. I want to be happy all 12000000 men!")
})