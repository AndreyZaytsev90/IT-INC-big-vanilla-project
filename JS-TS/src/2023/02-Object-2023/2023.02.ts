const student = {
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
console.log(student.name)
console.log(student.age)
console.log(student["Моя Фамилия"])
console.log(student.address.city.title)
console.log(student.technologies[3].title)