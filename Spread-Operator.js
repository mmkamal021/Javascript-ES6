// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = 'udemy'
const letters = [...udemy]
console.log(letters) // [ 'u', 'd', 'e', 'm', 'y' ]

const boys = ['jhon', 'peter', 'bob']
const girls = ['susan', 'anna']
const bestFriend = 'arnold'
/*
const friends = [boys, girls, bestFriend]
console.log(friends) // Nested Array [ [ 'jhon', 'peter', 'bob' ], [ 'susan', 'anna' ], 'arnold' ]
*/

const friends = [...boys, ...girls, bestFriend]
console.log(friends) // Single Array [ 'jhon', 'peter', 'bob', 'susan', 'anna', 'arnold' ]
// reference
/*
const newFriends = friends
newFriends[0] = 'nancy'
console.log(friends) // [ 'nancy', 'peter', 'bob', 'susan', 'anna', 'arnold' ]
console.log(newFriends) // [ 'nancy', 'peter', 'bob', 'susan', 'anna', 'arnold' ]
*/
// copy
const newFriends = [...friends]
newFriends[0] = 'nancy'
console.log(friends) // [ 'jhon', 'peter', 'bob', 'susan', 'anna', 'arnold' ]
console.log(newFriends) // [ 'nancy', 'peter', 'bob', 'susan', 'anna', 'arnold' ]

// ES2018 - ES8 Objects
/*
const person = { name: 'jhon', job: 'developer' }
const newPerson = { ...person }
console.log(person) // { name: 'jhon', job: 'developer' }
console.log(newPerson) // { name: 'jhon', job: 'developer' }
*/
/*
const person = { name: 'jhon', job: 'developer' }
const newPerson = { ...person, city: 'chicago' }
console.log(person) // { name: 'jhon', job: 'developer' }
console.log(newPerson) // { name: 'jhon', job: 'developer', city: 'chicago' }
*/
const person = { name: 'jhon', job: 'developer' }
const newPerson = { ...person, city: 'cicago', name: 'peter' }
console.log(person) // { name: 'jhon', job: 'developer' }
console.log(newPerson) // { name: 'peter', job: 'developer', city: 'cicago' }
