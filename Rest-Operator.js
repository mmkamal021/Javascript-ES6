// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear']
// const [first] = fruits
// console.log(first) // apple
/*
const [first, second, ...rest] = fruits
console.log(first, rest) // apple ['orange', 'lemon', 'banana', 'pear']
*/
const [first, second, ...restOfTheFruits] = fruits
console.log(restOfTheFruits) // ['lemon', 'banana']
const specificFruit = restOfTheFruits.find((fruit) => fruit === 'lemon')
console.log(specificFruit) // lemon
// objects
const person = { name: 'jhon', lastName: 'smith', job: 'developer' }
// const { name } = person
// console.log(name) // jhon

const { name, ...rest } = person
console.log(name, rest) // jhon {lastName: 'smith', job: 'developer'}

// function

const getAverage = (name, ...scores) => {
  console.log(name) // jhon
  // console.log(scores) // []
  console.log(scores) // [89, 76, 81, 100]
  console.log(scores) // [[23,45,67,89]]
  console.log(scores) // [23,45,67,89]
  const average =
    scores.reduce((total, item) => {
      return (total += item)
    }, 0) / scores.length
  console.log(average) // 86.5
}

// getAverage(person.name)
// getAverage(person.name, 89, 76, 81, 100)
const testScores = [23, 45, 67, 89]
// getAverage(person.name, testScores)
getAverage(person.name, ...testScores)
