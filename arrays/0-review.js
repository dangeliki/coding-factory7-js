const cities = ["Athens", "Paris", "Toronto"]

// Add - Modify the array
cities.push("London")

let city = cities[0]
console.log(city)

cities[1] = "London"

//Lamda exp. Arrow functions. Αριστερα η παραμετρος, δεξια το σωμα της συναρτησης.
// Όπου c είναι το κάθε ένα από τα στοιχεία του πίνακα και στο δεξί μέρος είναι ένας identifier
cities.forEach(c => console.log(c))   


cities.sort()

cities.sort((a,b) => a.localeCompare(b , "en"))    //αύξουσα ταξινόμηση

//Δημιουργώ shallow copy του αρχικού πίνακα και μετά κάνω sort
const citiesSorted = cities.slice().sort((a,b) => a.localeCompare(b , "en"))

//Copy
//Μετατρεπει ενα javascript object σε string
//Μετα η parse μετατρεπει το string ξανα σε js object και τελικα δημιουργειται ενα deep copy με καποιους περιορισμους
const citiesCopy1 = JSON.parse(JSON.stringify(cities))
//Deep copy χωρίς περιορισμούς
const cities2 = structuredClone(cities)

// Shallow Copies -- Spread Operator
const nums = [1, 2, 3, 4]
let maxVal = Math.max(...nums)
let maxIndex = nums.indexOf(maxVal)
console.log(`Max Value: ${maxVal}, Max Index: ${maxIndex}`)





