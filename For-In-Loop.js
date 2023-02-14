// "for in" loop - iterate over object properties
// not advised to use it on arrays, especiawlly if the order is important
// on arrays use 'for of'  loop instead

const person = {
  name: 'john',
  age: 25,
  status: 'student',
}

for (const propertyName in person) {
  // console.log(`${propertyName}`)
  // console.log(`${person}`)
  // console.log(`${person[propertyName]}`)
  console.log(`${propertyName} : ${person[propertyName]}`)
}
