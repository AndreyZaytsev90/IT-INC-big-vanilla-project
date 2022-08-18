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


















