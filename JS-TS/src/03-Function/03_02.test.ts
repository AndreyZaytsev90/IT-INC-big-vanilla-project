import {CityType} from "../02-Objects/02_02";


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



