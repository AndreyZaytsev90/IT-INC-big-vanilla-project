import axios from "axios";

const findUserInDB = (id) => {
}
//pending
/*const promise1 = axios.get("https://google.com")
promise1.then((data) => {
    console.log(data)})*/
axios.get('https://google.com').then((res) => res)

/*const obg1 = {
    name: '',
    say(message) {
        alert(message + ", " + this.name)
    }
}

obg1.name = "Andrey"
obg1.say("Hello")*/

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
console.log("finish")