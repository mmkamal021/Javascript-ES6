// Reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value

const staff = [
  { name: 'bob', age: 20, position: 'developer', salary: 100 },
  { name: 'peter', age: 25, position: 'designer', salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', salary: 400 },
  { name: 'anna', age: 35, position: 'intern', salary: 10 },
]

const dailyTotal = staff.reduce((total, person) => {
  console.log(total) // 1100, 1100, 1400, 1800
  console.log(person.salary) // 100, 300, 400, 10
  total += person.salary
  return total
}, 1000)

console.log(dailyTotal) // 1810
