// Set Object - stores a collection os unique values of any type

// new Set()
// add(value)
// delete(value)
// clear()
//has(value)

// iterators
// entries(),keys(),values(), forEach()
/*
const unique = new Set()

const random = 'third'

unique.add('first')
unique.add('second')
unique.add('first')
unique.add(random)
unique.add('4')
unique.add('first')

// const result = unique.delete('third')
// console.log(result)

const result = unique.delete('five')
console.log(result)

const isValue = unique.has(4)
console.log(isValue)

console.log(unique)
*/

// new Set() - accepts iterable objects

const products = [
  {
    title: 'hight-back bench',
    company: 'ikea',
  },
  {
    title: 'albany table',
    company: 'marcos',
  },
  {
    title: 'accent chair',
    company: 'caressa',
  },
  {
    title: 'wooden table',
    company: 'ikea',
  },
]

// const companies = products.map((item) => item.company)
// console.log(companies)

// const uniqueCompanies = new Set(companies)
// console.log(uniqueCompanies)

// const finalCompanies = [...uniqueCompanies]
// console.log(finalCompanies)

// const addFinalCompanies = ['all', ...uniqueCompanies]
// console.log(addFinalCompanies)

// One line this code
const result = ['all', ...new Set(products.map((item) => item.company))]
console.log(result)
