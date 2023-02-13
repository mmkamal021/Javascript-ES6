// Fetch API - Browser API for HTTP (AJAX) Requests
// Default - Get Requests, supports other methods as well
// Returns Promise

const url = 'https://www.course-api.com/react-tours-project'

// console.log(fetch(url)) // Promise {<pending>}

// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
/*
// This is async way
// async always return promise by defult

const getTours = async () => {
  try {
    const resp = await fetch(url)
    // console.log(resp) // resp -> json()
    const data = await resp.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
getTours()
*/

// Another way -> return data

const getTours = async () => {
  try {
    const resp = await fetch(url)
    // console.log(resp) // resp -> json()
    return resp.json()
    // console.log(data)
  } catch (error) {
    console.log(error)
  }
}

// console.log(getTours()) // Promise {<pending>}
console.log(getTours().then())
