type TomatoType = {
    id: number,
    address: {
        country: string,
        city: string
    },
    places: {
        quantity: number,
        info: InfoType[]
    }
}
type InfoType = {
    id: number,
    busy: boolean
}

type StudentType = {
    name: string,
    age: number,
    isActive: boolean,
    "Моя Фамилия": string,
    address: AddressType,
    technologies: TechnologiesType[]
}

type AddressType = {
    streetTitle: string,
    city: LocalCityType
}

type LocalCityType = {
    title: string,
    countryTitle: string
}

type TechnologiesType = {
    id: number,
    title: string
}


const student: StudentType = {
    "name": "Andrey",
    "age": 32,
    "isActive": false,
    "Моя Фамилия": "Zaytsev",
    "address": {
        streetTitle: 'Arbat',
        city: {
            title: 'Moscow',
            countryTitle: 'Russia'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'CSS'
        },
        {
            id: 2,
            title: 'HTML'
        },
        {
            id: 3,
            title: 'JS'
        },
        {
            id: 4,
            title: 'React'
        },
    ]
}

const tomato: TomatoType = {
    id: 1,
    address: {
        country: 'Russia',
        city: "Aleksin"
    },
    places: {
        quantity: 2,
        info: [
            {id: 1, busy: false},
            {id: 2, busy: true}
        ]
    }
}

console.log(student.name)
console.log(student.age)
console.log(student["Моя Фамилия"])
console.log(student.address.city.title)
console.log(student.technologies[3].title)

console.log(tomato.places.info[1].busy)
