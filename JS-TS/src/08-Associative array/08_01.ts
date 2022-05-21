import {v1} from "uuid";

const user1 = v1()
const user2 = v1()
const user3 = v1()


/*type UsersType = {
    [key: string] : { id: number, name: string}
}*/

export const usersObj = {
    '0' :'Andrey',
    '1' : 'Olga',
    '2' : 'Petr'
}

/*export const users: UsersType = {
    '100': {id: 100, name: "Andrey"},
    '101': {id: 101, name: "Olga"},
    '102': {id: 102, name: "Petr"}
}*/
//users[101]
/*let user = {id: 16516516 , name: "Sergey"}
users[user.id] = user // добавление юзера в объект
delete users[user.id] // удаления юзера по id
users[user.id].name = "Sasha" // обновление имени */


export let usersArray = [
    {id: 100, name: "Andrey"},
    {id: 101, name: "Olga"},
    {id: 102, name: "Petr"}
]

//usersArray.find(u => u.id === 102 )
//let usersCopy = [...usersArray.filter(), user] // добавление юзера в объект
//let usersArray = usersArray.filter(u => u.id !== user.id) // удаления юзера по id (пропусти в новый массив тех юзеров, id который не ровна id юзера, которого надо удалить)