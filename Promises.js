// Promices

// async await
// consume/use promises

// PENDING, REJECTED, FULFILLED

const value = 2
const promise = new Promise((resilve, reject) => {
  const random = Math.floor(Math.random() * 3)
  console.log(random)
  if (random === value) {
    resolve('you guessed correctly')
  } else {
    reject('wrong number')
  }
})
console.log(promise)

promise.then((data) => console.log(data)).catch((err) => console.log(err))
