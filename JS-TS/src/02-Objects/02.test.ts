import {CityType} from "./02_02";

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

test("city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2013);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(1);
    expect(city.houses[0].address.street.title).toBe("Lipchanskogo");

    expect(city.houses[1].buildedAt).toBe(1980);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(8);
    expect(city.houses[1].address.street.title).toBe("Sormovskaya");

    expect(city.houses[2].buildedAt).toBe(1969);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(4);
    expect(city.houses[2].address.street.title).toBe("Uralskaya");
})

test("city should contains hospital and fire station", () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe("HOSPITAL")
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(1000)
    expect(city.governmentBuildings[0].address.street.title).toBe("Nedorubova")

    expect(city.governmentBuildings[1].type).toBe("FIRE-STATION")
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe("Dmitrievsky")

})
