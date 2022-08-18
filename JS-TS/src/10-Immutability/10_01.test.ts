import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse,
    updateBook,
    upgradeUsersLaptop,
    upgradeUsersLaptop2,
    userReadedNewBook,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./10_01";


test("reference type test", () => {
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

test("upgrade laptop to macBook", () => {
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

    const upgradeUser = upgradeUsersLaptop(user, "macBook")

    expect(user).not.toBe(upgradeUser)
    expect(user.address).toBe(upgradeUser.address)
    expect(user.laptop).not.toBe(upgradeUser.laptop)
    expect(user.laptop.title).toBe("Lenovo")
    expect(upgradeUser.laptop.title).toBe("macBook")
})

test("upgrade color and model in Lenovo", () => {
    let user: UserWithLaptopType = {
        name: "Andrey",
        hair: 32,
        address: {
            city: "Moscow",
            house: 1
        },
        laptop: {
            title: "Lenovo",
            color: "Black",
            model: "B570e"
        }
    }

    const upgradeUserLaptop2 = upgradeUsersLaptop2(user, "Silver", "IdeaPad")

    expect(user).not.toBe(upgradeUserLaptop2)
    expect(user.address).toBe(upgradeUserLaptop2.address)
    expect(user.laptop).not.toBe(upgradeUserLaptop2.laptop)
    expect(user.laptop.title).toBe("Lenovo")
    expect(user.laptop.color).toBe("Black")
    expect(user.laptop.model).toBe("B570e")
    expect(upgradeUserLaptop2.laptop.color).toBe("Silver")
    expect(upgradeUserLaptop2.laptop.model).toBe("IdeaPad")
})

test("upgrade user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Andrey",
        hair: 32,
        address: {
            city: "Moscow",
            house: 1
        },
        laptop: {
            title: "Lenovo"
        },
        books: ["CSS", "HTML", "JavaScript", "React"]
    }

    const userCopy = moveUserToOtherHouse(user, 10)

    expect(user).not.toBe(userCopy)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address.house).toBe(10)
})

test("add book", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Andrey",
        hair: 32,
        address: {
            city: "Moscow",
            house: 1
        },
        laptop: {
            title: "Lenovo"
        },
        books: ["CSS", "HTML", "JavaScript", "React"]
    }

    const userCopy = userReadedNewBook(user, "Redux")

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books[4]).toBe("Redux")
})

test("add books to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Andrey",
        hair: 32,
        address: {
            city: "Moscow",
            house: 1
        },
        laptop: {
            title: "Lenovo"
        },
        books: ["CSS", "HTML", "JavaScript", "React"]
    }

    const userCopy = addNewBooksToUser(user, ["TypeScript", "RestAPI"])

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books[4]).toBe("TypeScript")
    expect(userCopy.books[5]).toBe("RestAPI")
    expect(user.books[4]).toBeUndefined()
    expect(user.books[5]).toBeUndefined()
    expect(user.books.length).toBe(4)
})

test("update JS to TS", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Andrey",
        hair: 32,
        address: {
            city: "Moscow",
            house: 1
        },
        laptop: {
            title: "Lenovo"
        },
        books: ["CSS", "HTML", "JavaScript", "React"]
    }

    const userCopy = updateBook(user, "TypeScript", "JavaScript")

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books[2]).toBe("TypeScript")
})