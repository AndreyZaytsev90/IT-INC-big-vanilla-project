import {CityType} from "../02-Objects/02_02";
import {createMessages, getStreetsTitlesOfGovenmentBuildins, getStreetsTitlesOfHouses} from "./05_02";


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

test("list of street titles of government buildings", () =>{
    let streetsNames = getStreetsTitlesOfGovenmentBuildins(city.governmentBuildings);

    expect(streetsNames.length).toBe(2)
    expect(streetsNames[0]).toBe("Nedorubova")
    expect(streetsNames[1]).toBe("Dmitrievsky")

})


test("list of street titles", () =>{
    let streets = getStreetsTitlesOfHouses(city.houses);

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("Lipchanskogo")
    expect(streets[1]).toBe("Sormovskaya")
    expect(streets[2]).toBe("Uralskaya")

})

test("create greeting messages for streets", () => {
    let messages = createMessages(city.houses);
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Putin Huy!, sad from Lipchanskogo")
    expect(messages[1]).toBe("Putin Huy!, sad from Sormovskaya")
    expect(messages[2]).toBe("Putin Huy!, sad from Uralskaya")


})



























