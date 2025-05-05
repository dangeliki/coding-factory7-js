console.log(Number.MAX_VALUE,Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
console.log((Number.POSITIVE_INFINITY))   //12/0
console.log((Number.NEGATIVE_INFINITY))   //-12/0

if (Number.isInteger(12)) {
  console.log("IsInteger")
} else {
  console.log("Not Integer")
}

if (Number.isNaN(isNaN)) {    //10 / "AUEB"
  console.log("True")
} else {
  console.log("False")
}

//  Global Function
if (isNaN(NaN)) {
  console.log("isNaN")
} else {
  console.log("Not is NaN")
}

console.log(Number.parseInt("44"))
console.log(parseInt("42"))