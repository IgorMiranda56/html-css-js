const listaDeNumeros = [1,-2,-3,4,5]

// console.log("Quantidade de números negativos.")
// const negativos = numerosNegativos.filter(numero => numero < 0)
// console.log(`Quantidade de negativos: ${negativos}`)

// console.log("Soma dos números positivos.")
// const somaPositivos = numeros.filter(numero => numero > 0)
// .reduce(soma, numero => soma + numero, 0)
// console.log(`Soma: ${soma}`)

const numerosPositivos = listaDeNumeros
.filter(numero => numero > 0 )
.reduce((soma, total) => soma + total, 0)

const numerosNegativos = listaDeNumeros
.filter(numero => numero < 0).length


console.log(`Quantidade de negativos: ${numerosNegativos}`)
console.log(`Soma: ${numerosPositivos}`)

