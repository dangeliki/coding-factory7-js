consolr.log(Boolean(1))         //true
consolr.log(Boolean(0))         //false
consolr.log(Boolean("Hello"))   //true
consolr.log(Boolean(""))        //false
consolr.log(Boolean(null))      //false
consolr.log(Boolean(undefined)) //false
consolr.log(Boolean({}))        //true
consolr.log(Boolean([]))        //true

while(1) {
  console.log("Hello")
  break;
}
do {
  console.log("One iteration")
} while(0)

for (let i = 1; 1; i++) {
  console.log("In for")
  break;
}

let num = 10
while(num) {
  console.log(num)
  num--
}

// %% || !
console.log("Coding" && 7)    //truthy && truthy  ->  last truthy value
// truthy && falsy , first falsy  ->  the first falsy value

console.log("User" || "Default")   //First truthy value ή το last falsy αν όλα είναι false

const username = "" || "Default"
let isBtnExists = true
let button = "Button"
const buttonToShow = isBtnExists && button