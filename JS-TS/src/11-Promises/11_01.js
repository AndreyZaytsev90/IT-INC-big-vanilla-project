import axios from "axios";

const findUserInDB = (id) => {
}
//pending
const promise1 = axios.get("https://google.com")
promise1.then((data) => {
  console.log(data)
})
//axios.get('https://google.com').then((res) => res)

/*const obg1 = {    // new Object
    name: '',
    say(message) {
        alert(message + ", " + this.name)
    }
}

obg1.name = "Andrey"
obg1.say("Hello")*/

//class Promise
//pending
const promise2 = findUserInDB(1)
promise2
  .then((user) => { // мы надеемся, что then произойдет и придут ДАННЫЕ с сервера (resolved)
    console.log(user)
  })
  .catch((error) => { // иначе catch ловит ошибку (rejected)
    console.warn(error)
  })
  .finally(() => {
    console.log("finish")
  })


const otherPromise = Promise.all([promise1, promise2]) // этот промис резолвится тогда, когда зарезовлились первый и второй промис. Если один из промис реджект, то весь провис тоже реджект

const otherPromise2 = Promise.allSettled([promise1, promise2]) // этот промис показывает в каком статусе находять промисы

otherPromise
  .then((results) => { //results - массив результатов
    const dataFromGoogle = results[0]
    const dataFromDB = results[1]
    console.log(dataFromGoogle.data.vacancies + "; " + dataFromDB.name)
  })
  .catch(() => {
    console.log("failed, try later")
  })