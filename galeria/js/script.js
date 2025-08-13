//DOM
const x = document.querySelector('#x')
const btneymar = document.querySelector('#btneymar')
const btronaldo_f = document.querySelector('#btronaldo_f')
const btcassio = document.querySelector('#btcassio')

//eventos
btneymar.addEventListener('click', neymar)
btronaldo_f.addEventListener('click', ronaldo_f)
btcassio.addEventListener('click', cassio)

//funções
function neymar(){
    x.src = 'images/neymar.jpg'
}

function ronaldo_f(){
    x.src = 'images/ronaldoF.webp'
}

function cassio(){
    x.src = 'images/cassio.jpg'
}