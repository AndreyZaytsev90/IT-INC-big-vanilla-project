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

export function upgradeUsersLaptop (u: UserWithLaptopType, title: string) {
  return {
    ...u, laptop: {...u.laptop, title: title}
  }
}

export const upgradeUsersLaptop2 = (u: UserWithLaptopType,
                                    color: string,
                                    model: string) => {
  return {
    ...u, laptop: { ...u.laptop, color: color, model: model}
  }
}