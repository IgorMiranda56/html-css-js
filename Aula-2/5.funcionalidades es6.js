// Criando um vetor de objetos.
const usuarios = [
    {nome: 'Marta', idade: 31},
    {nome: 'José', idade: 35},
    {nome: 'Carla', idade: 25}
]

// Filtrar idade maior que 30.
const idadeMaiorQue30 = usuarios.filter(usuario => usuario.idade > 30)

console.log('Listando todos os usuários.')
usuarios.forEach(usuario => console.log(`Nome: ${usuario.nome}, idade: ${usuario.idade}`))

console.log('\nIdade maior que 30.')
idadeMaiorQue30.forEach(usuario => {
    console.log(`Nome: ${usuario.nome}, idade: ${usuario.idade}`)
})

// Encontrar um usuário específico.
const usuarioEncontrado = usuarios.find(usuario => usuario.nome === "Marta")
// Devolve um objeto.
console.log("\nEncontrando usuário.")
console.log(usuarioEncontrado) // Resposta como objeto.
console.log(`Nome: ${usuarioEncontrado.nome}, idade: ${usuarioEncontrado.idade}`)

// Buscar em uma lista apenas nomes.
console.log("\nLista com nomes dos usuários.")
const apenasNomes = usuarios.map(usuario => usuario.nome)
apenasNomes.forEach(nome => console.log(nome))

console.log("\nLista com nomes dos usuários - numerado.")
apenasNomes.forEach((nome, index) => console.log(`${++index}: ${nome}`))

// i = 1
// console.log(i++)
// console.log(i)
// y = 1
// console.log(++y)

// Somando todas as idades.
console.log("\nSoma de todoas as idades.")
const somaIdades = usuarios.reduce((total, usuario) => total + usuario.idade, 0)
console.log(`Soma das Idades: ${somaIdades}`)

// Transformar elementos.
const numeros = [2, 4, 6, 8, 9]

console.log("\nOperação de multiplicação - dobrar valor")
const numerosDobrados = numeros.map(numero => numero * 2)
console.log(numeros)
console.log(numerosDobrados)

console.log("\nFiltrando números pares.")
const pares = numeros.filter(numero => numero % 2 === 0)
console.log(pares)

console.log("\nSomando todos os números.")
const total = numeros.reduce((soma, atual) => soma + atual, 0)
console.log(total)