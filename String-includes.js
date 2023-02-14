// String includes() - checks if a string contains another string.
// This is case sensitive

const products = [
  { title: 'Modern Poster' },
  { title: 'Bar Stool' },
  { title: 'Armchair' },
  { title: 'Leather Chair' },
]

// const firstName = 'jhon'
// const result = firstName.includes('j')
// const result = firstName.includes('j', 1)
// console.log(result)

const text = 'a'

const filteredProducts = products.filter((product) =>
  product.title.toLowerCase.includes(text)
)
console.log(filteredProducts)
