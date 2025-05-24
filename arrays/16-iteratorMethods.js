const students = ['Alice','Andreas','Bob','Kostas']

// students.forEach(function(stu,index,arr) {    //Αν θέλουμε να κάνουμε ignore, βάζουμε _
//   console.log(stu,index,arr)
// })

let filtered = students.filter(student => student === 'Andreas')
console.log(filtered)

let mapped = students.map(student => "Student: " +student)
console.log(mapped)