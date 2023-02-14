// Three methods to convert objects into array
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both

const person = {
  name: 'john',
  age: 25,
  status: 'student',
}
/*
const keys = Object.keys(person)
console.log(keys) // ['name', 'age', 'status']
*/
/*
const values = Object.values(person)
console.log(values) // ['john', 25, 'student']
*/

const entries = Object.entries(person)
console.log(entries) // (3) [Array(2), Array(2), Array(2)]

// map method

const newResult = entries.map((item) => {
  // console.log(item)
  const [first, second] = item
  // console.log(first, second) // person object full
  return first
})

// console.log(newResult) // ['name', 'age', 'status']

// for of
// for (const item of result) {
for (const [first, second] of result) {
  // const [first, second] = item
  console.log(first, second)
}
