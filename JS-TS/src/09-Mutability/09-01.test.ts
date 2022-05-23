import {UserType} from "./09-01";

const icreaseAge = (u: UserType) => u.age++

test("icrease age", () => {

    const user: UserType = {
        name: "Andrey",
        age: 32,
        address: {title: "Moscow"}
    }

    icreaseAge(user)
    expect(user.age).toBe(33)

    const superman = user // superman - эта ссылка на тот же объект ,что и user

    //user - это ссылкуа на объект

    superman.age = 1000 // Получается , что мы меняем возраст в том же объекте, что и по ссылке user

    expect(user.age).toBe(1000)
})

test("array test", () => {

    const users = [{
        name: "Andrey",
        age: 32
    },
        {
            name: "Olga",
            age: 34
        }
    ]

    let admins = users

    admins.push({name: "Petr", age: 3})

    expect(users[2]).toEqual({name: "Petr", age: 3})
})

test("value test", () => {

    const usersCount = 100

    let adminsCount = usersCount
    adminsCount++

    expect(adminsCount).toEqual(101)
})

test("referense type", () => {

    const address = {
        title: "Moscow"
    }

    const user: UserType = {
        name: "Andrey",
        age: 32,
        address: address
    }

    //let addr = user.address

    const user2: UserType = {
        name: "Olga",
        age: 34,
        address: address
    }


    user2.address.title = "Finland"

    expect(user2.address).toBe(user.address)
    expect(user.address.title).toBe("Finland")
})

test("referense type array test", () => {

    const address = {
        title: "Moscow"
    }

    const user: UserType = {
        name: "Andrey",
        age: 32,
        address: address
    }
    const user2: UserType = {
        name: "Olga",
        age: 34,
        address: address
    }

    const people = [user, user2, { name: "Petr", age: 3, address: address}]

    people[2].name = "Petya"

    const parents = [user, user2]

    parents[0].name = "Andrey Dmitrievich"

    expect(people[2].name).toBe("Petya")
    expect(parents[0].name).toBe("Andrey Dmitrievich")
    expect(user.name).toBe("Andrey Dmitrievich")
})