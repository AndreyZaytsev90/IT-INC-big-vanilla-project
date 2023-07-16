const ages2023 = [18, 20, 22, 1, 100, 90, 15, 46, 75]

const predicate2023 = (age: number) => age > 90

const oldAges2023 = [100] // >90

type CourseType2023 = {
    title: string,
    price: number
}

const courses2023 = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150}
]
// < 160
const chipPredicate2023 = (course: CourseType2023) => course.price < 160

const chipCourses2023 = [
    {title: 'CSS', price: 110},
    {title: 'React', price: 150}
]