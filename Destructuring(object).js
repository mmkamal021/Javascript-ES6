// faster/easier way to access/unpack variables from arrays, objects (later videos)

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
}

// const { first, last, city, zip } = bob
// const { last, first, city, zip } = bob
const {
  last: shakeAndBake,
  first,
  city,
  zip,
  siblings: { sister: favoriteSibling },
} = bob
console.log(first, city, zip, shakeAndBake, favoriteSibling) //bob chicago undefined sanders  jane

// const firstName = bob.first
// const lastName = bob.last
// const sister = bob.siblings.sister
// console.log(firstName, lastName, sister)
/*
function printPerson(person) {
  // console.log(person.first) // bob
  const { first, last } = person
  console.log(first, last) // bob sanders
}
printPerson(bob)
*/

function printPerson({ first, last, city, siblings: { sister } }) {
  console.log(first, last, sister) // bob sanders jane
}
printPerson(bob)
