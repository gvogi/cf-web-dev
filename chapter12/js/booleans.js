console.log("Boolean(1):  " + Boolean(1))
console.log("Boolean(0):  " + Boolean(0))
console.log("Boolean(''):  " + Boolean(''))
console.log("Boolean('Hello'):  " + Boolean('Hello'))
console.log("Boolean(null):  " + Boolean(null))
console.log("Boolean(undefined):  " + Boolean(undefined))
console.log("Boolean({}):  " + Boolean({}))
console.log("Boolean(new Boolea((false))):  " + Boolean(new Boolean(false)))
console.log((0) ? '1 is true ' : (0) ? '1 is true ' : '0 is false')

// while true
while (1) {
    console.log("Once upon a time")
    break
}

do { console.log('Hello Coding factory') } while (0)

for (let i = 0; 1; i++) {
    console.log('In for, loop: ' + i)
    break
}