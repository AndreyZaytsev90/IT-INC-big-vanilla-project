export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

 export function makeHairstyle (u: UserType, power: number) {
    const copyUser ={
        ...u,
        hair: u.hair / power
    }
    //copyUser.hair = u.hair / power

    return copyUser

}

export function moveUser (u: UserWithLaptopType, title: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: "Aleksin"}

    }
    /*copyMoveUser.address = { ...copyMoveUser.address, city: "Aleksin"}*/
}
