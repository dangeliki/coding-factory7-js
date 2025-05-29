const jsObj = {
  id: 1 , 
  hobbies: [ {id: 1, title: "gym"} , {id: 2 , title: "music"} ] 
}

//Μετατρέπει το json obj σε json string
//Serialization
const jsonStr = JSON.stringify(jsObj)
console.log(jsonStr)

//Deserialization - Μετατρέπει το json string πίσω σε json obj
const jsObj2 = JSON.parse(jsonStr)
console.log(jsObj2)