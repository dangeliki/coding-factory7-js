const obj = {
  id: 1,
  firstname: "Alice"
}

//Add properties

//Modify the object
obj.lastname = "W."
console.log(obj)

//Immutable - fresh copy
const addToObj = (obj,field,value) => ({ ...obj, [field]: value })    //Το spreading μέσα σε παρενθέσεις. Για να κανουμε interpolate τη μεταβλητη , βαζουμε []
const objCopy = addToObj(obj, "lastname", "W.")
console.log(objCopy)

// Update the Object

// Modifies/Updates the obj
obj.firstname = "Tom"
console.log(obj)

// Immutable - fresh copy
const updateObj = (obj, field, newVal) => ({...obj, [field]: newVal})
const updatedObj = updateObj(obj, "firstname", "Bob")
console.log(updatedObj)

// Delete a property of an object

// Immutable delete
const deleteIdFromObj = (obj,field) => {
  const {[field]: _, ...objToReturn} = obj    //_: ignore variable
  return objToReturn
}

const objFromDelete = deleteIdFromObj(obj,"id")
console.log(objFromDelete)

