let s1 = String(12) // String coersion
let s2 = new String("Hello") // returns String object
let s3 = "Coding Factory"
let s4 = 'Hello World!'

//back ticks - template literals
let s5 = `
coding
Factory 
aueb
`

let redHeart = "\uD83D\uDC97"
for (let ch of redHeart) {
    console.log(ch)
}

let [codingFactory] = [...redHeart]

console.log("Coding Factory " + codingFactory)

for (let i = 0; i < redHeart.length; i++) {
    console.log(redHeart[i])
}