import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "../../04-Filter/04_2";
import {city} from "../02-Object-2023/2023.02.test";

test('should take old men older then 90', () => {
    const ages2023 = [18, 20, 22, 1, 100, 90, 15, 46, 75];

    //const predicate2023 = (age: number) => age > 90

    const oldAges2023 = ages2023.filter(age => age > 90);

    expect(oldAges2023.length).toBe(1)
    expect(oldAges2023[0]).toBe(100)
})

test('courses should be cheaper than 160', () => {
    const courses2023 = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'React', price: 150}
    ]
    //const chipPredicate2023 = (course: CourseType2023) => course.price < 160

    const cheaperCourses = courses2023.filter(course => course.price < 160)

    expect(cheaperCourses.length).toBe(2)
    expect(cheaperCourses[1].title).toBe('React')
    expect(cheaperCourses[0].price).toBe(110)

})

test('get only completed tasks', () => {
    const tasks = [
        {id:1, title: 'Milk', isDone: false},
        {id:2, title: 'Bread', isDone: true},
        {id:3, title: 'Chocolate', isDone: true},
        {id:4, title: 'Coffee', isDone: false}
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[1].id).toBe(3)
})

test('get only uncompleted tasks', () => {
    const tasks = [
        {id:1, title: 'Milk', isDone: false},
        {id:2, title: 'Bread', isDone: true},
        {id:3, title: 'Chocolate', isDone: true},
        {id:4, title: 'Coffee', isDone: false}
    ]

    const completedTasks = tasks.filter(task => !task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Lipchanskogo');

    expect(city.houses.length).toBe(2);
    expect(city.houses[0].id).toBe(2);

})

// 03. Массив строений, где работают больше 500 людей
test.skip('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 1000)

    expect(buildings.length).toBe(0);
    expect(buildings[0].type).toBe(null)
})