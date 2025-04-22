const numeros = [1, 2, 4, 6, 8, 9]

console.log("\nFiltrando números pares.")
const pares = numeros.filter(numero => numero % 2 === 0)
console.log(`Pares: ${pares}`)

const impares = numeros.filter(numero => numero % 1 === 0)
console.log(`Ímpares: ${impares}`)

