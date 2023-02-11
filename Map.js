// MAP Method
const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    postiion: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'jhon',
    age: 26,
    position: 'intern',
  },
]
// Quokka.js - Extension
// return a new array
// does not change the size of orginal array (unlike filter)
// uses values from orginal array when making new one
/*
const ages = people.map((person) => {
  // console.log(person)
  // return 'hello world'

  // return person.age
  return person.age * 2
})
*/
/*
const ages = people.map((person) => person.age * 2)
console.log(ages)
*/
/*
getAges = (person) => person.age * 2
const ages = people.map(getAges)
console.log(ages)
*/

// construct Advence example
getAges = (person) => person.age * 2
const ages = people.map(getAges)
console.log(ages)

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  }
})
console.log(newPeople)

// Wrapper data in HTML
const names = people.map((person) => `<h2>${person.name}</h2>`)
const result = document.querySelector('#result')

result.innerHTML = names.join('')
