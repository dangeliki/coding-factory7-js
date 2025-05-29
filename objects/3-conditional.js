const book = {author: {first: "Th.",last: "Andr"}}

let lastname = book?.author?.last   //if book == null then author else last

console.log(lastname)