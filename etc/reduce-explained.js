// peer-mentoring notes -- reduce()

const compoundResidents = [
  {
    results: 7,
    pages: 1
  },
  {
    title: 'Dr.',
    firstName: 'Thaddeus',
    nickName: 'Rusty',
    lastName: 'Venture',
    alignment: 'neutral evil'
  },
  {
    title: null,
    firstName: 'Henry',
    nickName: 'Hank',
    lastName: 'Venture',
    alignment: 'chaotic good'
  },
  {
    title: null,
    firstName: 'Dean',
    nickName: null,
    lastName: 'Venture',
    alignment: 'neutral good'
  },
  {
    title: null,
    firstName: 'Brock',
    nickName: null,
    lastName: 'Samson',
    alignment: 'true neutral'
  },
  {
    title: 'Dr.',
    firstName: 'Byron',
    nickName: null,
    lastName: 'Orpheus',
    alignment: 'lawful good'
  },
  {
    title: null,
    firstName: 'Triana',
    nickName: null,
    lastName: 'Orpheus',
    alignment: 'true neutral'
  },
  {
    title: null,
    firstName: 'H.E.L.P.eR.',
    nickName: null,
    lastName: null,
    alignment: 'lawful good'
  }
]

// TODO: transfer explanations to markdown

// reduce()
// reduce() is used to accumulate data from an array. some uses might include:
  // counting instances of something in an array
  // creating a new array or object from data in an array
  // combining data from an array into a single string

// reduce() itself has two parameters:
// const exampleReduce = exampleArray.reduce(
//   // the callback function -- this is what reduce will do to each element as it iterates through the array.
//     // this function is commonly written inline as an anonymous arrow function (this is how we usually wrote reduce() at Alchemy).
//     // however, the callback can also be declared as a separate, named function.
//   callback,
//   // the initial value -- OPTIONAL -- this is the initial value of the accumulator (see below).
    // if you don't specify an initial value, the reduce will use the value of the first element in the array as the initial value, and the loop will start at the second element in the source array.
    // this can be useful if, for example, you're writing an API function to retrieve JSON data, and know that the first element will always be a metadata object -- you can omit the initialValue to make sure that the metadata is always included, then perform your operations only on the remaining elements.
//   initialValue
// )
// // reduce() expects the callback function to have these parameters:
// function exampleCallback (
//   // acc (accumulator) -- this is the variable that's used to store the accumulated data, and is what the reduce() returns once it's complete. at the start of the loop, the accumulator will be equal to the initial value.
//   acc,
//   // curr (current) -- this is the value of the element currently being evaluated by the reduce().
//   curr,
//   // idx (index) -- OPTIONAL -- this is the index of the element currently being evaluated by the reduce().
//   idx,
//   // src (source array) -- OPTIONAL -- this is a direct reference to (not a copy of!) the array upon which reduce() is being called. this is mostly useful for when you're chaining methods together, and need to reference other parts of the array .
//   src
// )

// example 1: counting members of the Venture family
// let's start by writing a for loop that separates out the individual components of the reduce:
function countWithForLoop(array) {
  // note: if we were writing this for loop function normally, we'd just initialize acc by setting it to 0. i added the extra initialValue step to illustrate how it works in the reduce().
  // i'm also leaving out the src parameter, because it doesn't make a lot of sense here.
  const initialValue = 0
  let acc = initialValue

  for (let idx = 0; idx < array.length; idx++) {
    const curr = array[idx]

    if(curr.lastName == 'Venture') acc++
  }

  console.log(acc)
  return acc
}

countWithForLoop(compoundResidents)

// now, let's put them together into the reduce:
function countWithReduce(array) {
  // we don't really need idx or src for this one, so i'm leaving them out
  return array.reduce((acc, curr) => {
    if(curr.lastName == 'Venture') acc++
    
    return acc
  }, 0)
}

console.log(countWithReduce(compoundResidents))

// example 2: transforming data
function transformWithForLoop(array) {
  const initialValue = []
  let acc = initialValue

  for (let idx = 0; idx < array.length; idx++) {
    if (idx === 0) continue

    const curr = array[idx]

    acc = [...acc, { name: `${curr.firstName}${curr.lastName ? ' ' + curr.lastName : ''}`, alignment: curr.alignment }]
  }

  console.log(acc)
  return acc
}

transformWithForLoop(compoundResidents)

function transformWithReduce(array) {
  return array.reduce((acc, curr, idx) => {
    if (idx === 0) return acc

    return [...acc, { name: `${curr.firstName}${curr.lastName ? ' ' + curr.lastName : ''}`, alignment: curr.alignment }]
    // return acc
  }, [])
}

console.log(transformWithReduce(compoundResidents))

// example 3: making a sample API call with metadata
// for this one, we WON'T specify an initialValue -- that's because we know the first object in the array is metadata, and we want the whole metadata object included. with that in mind, we don't need to start doing any filtering until we reach the second element.
function retrieveWithForLoop(array) {
  let acc = array[0]
  acc = [acc]

  for (let idx = 1; idx < array.length; idx++) {
    const curr = array[idx]

    if(curr.lastName == 'Venture') acc = [...acc, { id: idx, firstName: curr.firstName, nickName: curr.nickName, lastName: curr.lastName }]
  }

  console.log(acc)
  return acc
}

retrieveWithForLoop(compoundResidents)

function retrieveWithReduce(array) {
  return array.reduce((acc, curr, idx) => {
    if (idx === 1) acc = [acc]

    if (curr.lastName == 'Venture') return [...acc, { id: idx, firstName: curr.firstName, nickName: curr.nickName, lastName: curr.lastName }]
    
    return acc;
  })
}

console.log(retrieveWithReduce(compoundResidents))
