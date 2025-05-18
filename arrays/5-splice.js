const arr = [1,2,3,4,5,6,7,8]

//Delete
const arr2 = arr.splice(0,4)    //από την θέση 0 να διαγράψει 4 στοιχεία και αυτός ο πίνακας που γίνεται splice, επιστρέφεται στον arr2
console.log(arr)
console.log(arr2)

//Insert
arr.splice(0,0,10)    //απο τη θεση 0 , να διαγραψει 0 στοιχεια και στην ιδια θεση να βαλεις το 10
console.log(arr)

//Update
arr.splice(0,1,11)  //στη θεση 0 διαγραφει 1 στοιχειο και στη θεση του βαζει το 11
console.log(arr)