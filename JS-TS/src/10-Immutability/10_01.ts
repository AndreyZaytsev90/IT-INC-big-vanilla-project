export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house?: number
    }
}

export type LaptopType = {
    title: string,
    color?: string,
    model?: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type CompaniesType = { id: number, title: string }

export type WithCompaniesType = {
    companies: Array<CompaniesType>
}


export function makeHairstyle(u: UserType, power: number) {
    const copyUser = {
        ...u,
        hair: u.hair / power
    }
    //copyUser.hair = u.hair / power
    return copyUser
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u, address: {...u.address, city: city}
    }
    /*
    copyMoveUser.address = {
    ...copyMoveUser.address,
     city: "Aleksin"}
     */
}

export function upgradeUsersLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u, laptop: {...u.laptop, title: title}
    }
}

export const upgradeUsersLaptop2 = (u: UserWithLaptopType,
                                    color: string,
                                    model: string) => {
    return {
        ...u, laptop: {...u.laptop, color: color, model: model}
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u, address: {...u.address, house: house}
    }
}

export function userReadedNewBook(u: UserWithLaptopType & UserWithBooksType, book: string) {
    return {
        ...u, books: [...u.books, book]
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType,
                                  newBooks: Array<string>) {
    return {
        ...u, books: [...u.books, ...newBooks]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType,
                           newBook: string,
                           oldBook: string) {
    return {
        ...u, books: u.books.map(book => book === oldBook ? newBook : book)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType,
                           bookToBoDeleted: string) {
    return {
        ...u, books: u.books.filter(book => book !== bookToBoDeleted)
    }
}

export function addCompany(u: UserWithLaptopType & WithCompaniesType,
                           company: { id: number; title: string }) {
    return {
        ...u, companies: [...u.companies, company]
    }
}

export const changeCompany = (u: WithCompaniesType,
                              id: number,
                              title: string) => {
    return {
        ...u, companies: u.companies.map(c => c.id === id ? {...c, title} : c)
    }
}

export const updateCompany = (companies: { [key: string]: Array<CompaniesType> },
                              userName: string,
                              companyId: number,
                              newTitle: string) => {

    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companyCopy

}









