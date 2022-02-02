import {makeHairstyle, moveUser, UserType, UserWithLaptopType} from "./10_01";


test("r", () => {
    let user: UserType = {
        name: "Andrey",
        hair: 32,
        address: {
            city: "Moscow"
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)

})

test("change address", () => {
    let user: UserWithLaptopType = {
        name: "Andrey",
        hair: 32,
        address: {
            city: "Moscow",
            house: 1
        },
        laptop: {
            title: "Lenovo"
        }
    }

    const movedUser = moveUser(user, "Aleksin")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Aleksin")



})


 // закончил на 37 мин