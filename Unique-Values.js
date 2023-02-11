// Unique Values
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
]
/*
// return all value in category
const categories = menu.map((item) => item.category)
console.log(categories)
*/
/*
// return only unique value (object) in category 
const categories = new Set(menu.map((item) => item.category))
console.log(categories)
*/
/*
// return only unique value (array) in category
const categories = [...new Set(menu.map((item) => item.category))]
console.log(categories)
*/

const categories = ['all', ...new Set(menu.map((item) => item.category))]
console.log(categories)

// map - all instances
// new Set - narrow down
// ['all',...] - turn it back to array

// Apply in HTML code
const resut = document.querySelector('.result')
result.innerHTML = categories
  .map((category) => {
    return `<button>${category}</button>`
  })
  .join('')
