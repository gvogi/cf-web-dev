const container = document.querySelector(".container")
// container.innerHTML = "<p>Hello World CF</p>"
container.innerHTML += "<p>Hello World CF</p>" // Αν θελουμε να διατηρήσουμε το Hello... θέλει +=
const p = document.createElement('p')
p.textContent = "Hello World!!!!!!!!!!"

container.appendChild(p)
