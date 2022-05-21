
type UsersType = {
    [key: string] : { id: number, name: string}
}

let users : UsersType

beforeEach(() => {
    users = {
        '100': {id: 100, name: "Andrey"},
        '101': {id: 101, name: "Olga"},
        '102': {id: 102, name: "Petr"}
    }
})

test("should select user", () => {
    users['102'].name = "Petya"

    expect(users['102']).toEqual({id: 102, name: "Petya"})
})

test("should delete user", () => {
    delete users["102"]

    expect(users['102']).toBeUndefined()
})