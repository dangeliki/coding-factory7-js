const students = ['Alice','Andreas','Andreas','Bob','Kostas']

students.forEach(function(val, index, arr) {
  console.log(index, val, arr)
})

let filtered = students.filter(student => student === 'Andreas')    //λειτουργει σαν boolean
console.log(filtered)

let mapped = students.map(student => "Student: " +student)
console.log(mapped)

const numbers = [1,6,9,12]
let sum = numbers.reduce((total,val) => total + val , 0)    //accumulator , το val του πινακα και μετα το initial value
console.log(sum)