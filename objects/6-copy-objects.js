const initial = { name: "Alice" , age: 30 , address: {street: "Patision", num: 76} }

// 1. With spreading. Spread operation gives a shallow copy
const copyInitial = {...initial}
console.log(copyInitial)

// 2. Object type
const copyInitial2 = Object.assign({},initial)

// 3. With JSON function - Deep Copy
const copyInitial3 = JSON.parse(JSON.stringify(initial))

const initial2 = { name: "Alice" , age: undefined , address: {street: "Patision", num: 76} }
console.log(JSON.stringify(initial2))

// 4. Deep Copy
const copyInitial4 = structuredClone(initial)