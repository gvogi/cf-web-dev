const person = {
    firstname: "Alice",
    lastname: "W."
}

for (const p in person) {
    // console.log(person[p])
    // document.write(person[p] + " ")
    // document.write("<br>")
    document.write(`${p}, ${person[p]}`)
    document.write("<br>")
}