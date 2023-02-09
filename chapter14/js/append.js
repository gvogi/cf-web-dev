const container = document.querySelector("#container")
// container.innerHTML = "<p>Hello World CF</p>"
// container.classList.add('container')
// container.classList.add('container', 'box-center')
const cls = ['container', 'box-center']
container.classList.add(...cls)

container.innerHTML += '<p id="hello">Hello World CF</p>' // Αν θελουμε να διατηρήσουμε το Hello... θέλει +=
const hello = document.querySelector('#hello')
const cf = document.querySelector('#cf')

// hello.style.textAlign = 'center'
// cf.style.textAlign = 'center'

hello.classList.add('center')
cf.classList.add('center')

// const p = document.createElement('p')
// p.textContent = "Hello World!!!!!!!!!!"

// container.appendChild(p)


