// Array.from - NOT ON PROTOTYPE

// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const udemy = 'udemy'
/*
// const l = [...udemy]
// console.log(l) // [ 'u', 'd', 'e', 'm', 'y' ] 
console.log(Array.from(udemy)) // [ 'u', 'd', 'e', 'm', 'y' ]
*/

const text = document.querySelectorAll('.text')
console.log(text) // NodeList(3) [h2.text, h2.text, h2.text]
/*
const newText = Array.from(text)
console.log(newText) // (3) [h2.text, h2.text, h2.text]
*/
const newText = Array.from(text).find((item) => item.textContent === 'person')
// console.log(newText) // <h2 class="text">person</h2>

const items = Array.from({ length: 120 }, (_, index) => {
  return index
})

const itemsPerPage = 14
const pages = Math.ceil(items.length / itemsPerPage)
console.log(pages) // 12

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage
  const tempItems = items.slice(start, start + itemsPerPage)
  return tempItems
})

console.log(newItems)
