/*
const resolvedPromise = Promise.resolve([{}])
resolvedPromise
  .then(data => console.log(data))
  .catch(error => console.warn(error))

*/

/*
const rejectedPromise = Promise.reject({message: "Error"})
console.warn(rejectedPromise)

rejectedPromise
  .then(data => console.log(data))
  .catch(error => console.warn(error))*/

const userAPI = {
  getAllUsers() {
    return Promise.resolve([{name: "Andrey"}, {name: "Olga"}])
  },
  login(login, password) {
    if (login !== "qwerty" && password !== "12345") {
      return Promise.reject({message: "Incorrect Login and Password"})
    } else {
      return Promise.resolve([{name: "Andrey"}, {name: "Olga"}])
    }
  }
}

const promise = userAPI.getAllUsers()
promise.then(users => console.log(users))

userAPI.login("qwerty", "12345")
  .then(() => {
    //makeRedirect
  })
  .catch(error => {
    // show error
  })

