const [a, b] = [1, 2]   //array distructure

//Object Distructure
const person = {
  firstname: "Alice" ,
  age: 25,
  city: "Athens"
}

const {firstname, age, city} = person
console.log(firstname, age, city)

const {firstname: first, age: newAge, city: myCity = "Toronto"} = person

console.log(first, newAge, myCity)



