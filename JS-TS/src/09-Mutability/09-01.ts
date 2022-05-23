export type UserType = {
    name: string
    age: number
    address: {title: string}
}

const user = {
    name: "Andrey",
    age: 32
}

const icreaseAge = (user: UserType) => user.age++