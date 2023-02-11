// dot notation
// dot notation
const person = {
  name: 'jhon',
}
console.log(person.name) // jhon
person.age = 25
console.log(person) //{name: 'jhon', age: 25}

// SQUARE BRACKET NOTATION

const items = {
  'featured-items': ['item1', 'item2'],
}

console.log(items['featured-items']) //['item1', 'item2']
console.log(person['name']) // jhon

//
let appState = 'loading'
appState = 'error'
const keyName = 'computer'

const app = {
  [appState]: true,
}
app[keyName] = 'apple'
console.log(app)
// console.log(app) //{loading: true}
// console.log(app) //{error: true}
console.log(app) //{error: true, computer:'apple'}

//
const state = {
  loading: true,
  name: '',
  job: '',
}

function updateState(key, value) {
  state[key] = value
}

updateState('name', 'jhon')
console.log(state) // {loading: true, name: 'jhon', job: ''}
updateState('job', 'developer')
console.log(state) // {loading: true, name: 'jhon', job:developer}
updateState('loding', false)
console.log(state) // {loading: false, name: 'jhon', job:developer}
updateState('products', []) // {loading: false, name: 'jhon', job:developer, products: []}
updateState('name', 'peter')
