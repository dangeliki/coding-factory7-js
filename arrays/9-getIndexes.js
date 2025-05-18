const arr = [1,2,4,5,2,6,7,2,5,8,9,9,2]

//function επιστρεφει πινακα με τα position στις οποιες βρισκεται ενας συγκεκριμενος αριθμος

const getIndexes = (arr,val) => {
  const indexes = []

  arr.forEach((v,index) => {
    if (v == val) {
      indexes.push(index)
    }

  })

  return indexes

}

console.log(getIndexes(arr,2))