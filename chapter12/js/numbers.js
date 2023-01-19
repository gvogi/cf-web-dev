console.log("Min-max Values" + Number.MIN_VALUE + " - " + Number.MAX_VALUE)
console.log("Min-max Safe int" + Number.MIN_SAFE_INTEGER + " - " + Number.MAX_SAFE_INTEGER)
console.log("Is ABC a number? " + Number('ABC'))
console.log("Positive div by zero : " + (12 / 0))
console.log("Negative div by zero : " + (-12 / 0))

let num = Number("12") //Coersion if String to Number
if (Number.isInteger(num)) {
    console.log("Number.isInteger(12) : " + Number.isInteger(num))
} else {
    console.log("Not an integer")
}

let aNum = 4 / 'a'
if (Number.isNaN(aNum)) {
    console.log("Number.isNaN(4 / 'a') " + Number.isNaN(4 / 'a'))
} else {
    console.log(aNum)
}

console.log(".toFixed() " + (12.23456).toFixed(2))
