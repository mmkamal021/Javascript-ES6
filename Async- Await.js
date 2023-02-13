//async / await
//async must be present, always returns a promise
//await waits till promise is settled
// error handling - try/catch block

const users = [
  { id: 1, name: 'jhon' },
  { id: 2, name: 'susan' },
  { id: 3, name: 'anna' },
]

const articles = [
  { userId: 1, articles: ['one', 'two', 'three'] },
  { userId: 2, articles: ['four', 'five'] },
  { userId: 1, articles: ['six', 'seven', 'eight', 'nine'] },
]

const example = async () => {
  return 'hello there'
}

async function someFunc() {
  const result = await example()
  console.log(result) // hello there
  console.log('hello world') // hello world
}

// console.log(example()) // Promise {}
// someFunc()

// getUser('susan')
//   .then((user) => console.log(user))
//   .catch((err) => console.log(err))

// Another getUser

// getUser('susan')
//   .then((user) => getArticles(user.id))
//   .then((articles) => console.log(articles))
//   .catch((err) => console.log(err))

const getData = async () => {
  try {
    const user = await getUser('john')
    // console.log(user) // {id:1, name:'jhon'}
    // No need to if condition cause try already checked
    // if (user) {
    //   const articles = await getArticles(user.id)
    //   console.log(articles) // ['one', 'two', 'three']
    // }
    const articles = await getArticles(user.id)
    // const articles = await getArticles(user.name)
    console.log(articles) // ['one', 'two', 'three']
    // console.log(articles) // Wrong ID
  } catch (error) {
    console.log(error) // No such user with name: johs
  }
}
getData()

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name)

    if (user) {
      return resolve(user)
    } else {
      reject(`No such user with name: ${name}`)
    }
  })
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId)

    if (userArticles) {
      return resolve(userArticles.articles)
    } else {
      reject(`Wrong ID`)
    }
  })
}
