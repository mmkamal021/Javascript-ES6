const people = [
  {
    name: 'bob',
    location: { street: '123 main street', timezone: { offset: '+7:00' } },
  },
  { name: 'peter', location: { street: '123 Pine street' } },
  {
    name: 'susan',
    location: { street: '123 Apple street', timezone: { offset: '+9:00' } },
  },
]

people.forEach((person) => {
  // console.log(person.name) // bob peter susan
  // console.log(person.location.timezone.offset) // Error : cause offset is missing
  // This is the solution of missing ofset
  // console.log(
  //   person.location && // +7:00
  //     person.location.timezone && // undefined
  //     person.location.timezone.offset // +9:00
  // )

  // This is the another solution of missing ofset
  console.log(person?.location?.timezone?.offset) // +7:00 undefined +9:00
  console.log(person?.location?.timezone?.offset || 'hello world') // +7:00 hello world +9:00
})
// This the concept why error offset
// console.log(true && 'hello world')
// console.log(false && 'hello people')
