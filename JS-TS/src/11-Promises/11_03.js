//Цепочка промисов

/*const user = {
  id: 1,
  name: "Andrey"
}
const findUserInDB = (id) => {
}*/

/*const promise2 = findUserInDB(user)

//Каждый новый then вызывает новый промис

const promise2_2 = promise2.then((user) => {return user.name}) // пока не отработает обработчик (колбэк функция) (user) => {}, промис promise2_2 не зарезолвиться
promise2_2.then(name => console.log(name))*/

//Цепочка then
/*findUserInDB(1)
.then((user) => {return user.name}) // Новый промис
.then(name => console.log(name)) // Новый промис*/

import axios from "axios";

const settings = {
  withCredentials: true,
  headers: {
    'API-KEY': 'e63159f0-e2d8-4a94-a54e-dc4334240e6b',
  }
}

/*axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
.then(response => console.log(response.data))
.then(data => console.log(data))*/

const makeITKamasutraReqest = () => {
  const promise = axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
  return promise
}

makeITKamasutraReqest().then((res) => console.log(res.data))