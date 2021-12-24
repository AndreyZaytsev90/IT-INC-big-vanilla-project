import {CityType} from "./02_02";

let city: CityType

beforeEach(() => {
    city = {
        title: "Moscow",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address:
                    {
                        number: 1,
                        street:
                            {
                                title: "Lipchanskogo"
                            }
                    }
            },
            {
                buildedAt: 1980,
                repaired: false,
                address:
                    {
                        number: 8,
                        street:
                            {
                                title: "Sormovskaya"
                            }
                    }
            }, {
                buildedAt: 1969,
                repaired: false,
                address:
                    {
                        number: 4,
                        street:
                            {
                                title: "Uralskaya"
                            }
                    }
            }],
        govermentBuildings: [],
        citizensNumber: 12000000
    }
})

test.skip("city should contains 3 houses", () => {
  //  expect(city.houses[0].length).toBe(3);

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
