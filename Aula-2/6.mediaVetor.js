// const notas = [7,7,7]

// const media = (notas) => {
//     const soma = notas.reduce((acc, nota) => acc + nota, 0)
//     return soma / notas
// }

// console.log(`Notas: ${notas}`)
// console.log(`Média: ${media}`)

const notas = [7,7,7]

const media = (notas) => (notas++) / 3

console.log(`Notas: ${notas}`)
console.log(`Média: ${media}`)