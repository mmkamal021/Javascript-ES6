// ECMAScript 2022
// at() - takes integer and returns the item at that index - string,array

// Top Level Await - Basic Example
import fatchTabs from './fetchTabs.js'
const tabs = await fatchTabs()
console.log(tabs)

const scores = [99, 90, 100]

const oldLast = scores[scores.length - 1]
console.log(oldLast) // 100

const newLast = scores.at(-1)
console.log(newLast) // 100

const channel = 'Codding JavaScript'
console.log(channel.at(0)) // C
/*
const fetchData = async () => {
  const resp = await fetch('https://www.course-api.com/react-tabs-project')
  const data = await resp.json()
  console.log(data)
}
fetchData()
*/
const resp = await fetch('https://www.course-api.com/react-tabs-project')
const data = await resp.json()
console.log(data)
