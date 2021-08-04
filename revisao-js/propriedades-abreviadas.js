/*
let InfoUsuario = {
    usuario: 'Guilherme',
    nomeCompleto: 'Guilherme Vinícius',
    grupo: 'alunos',
    senha: '123456789'
}
*/

let usuario = "Guilherme"
let nome = "Guilherme Vinicius"
let grupo = 'Alunos'
let password = "123"

// Abreviando propriedades
let InfoUsuario = {
    usuario, //usuario: usuario - como repete não precisa escrever duas vezes
    nomeCompleto: nome,
    grupo, //grupo: grupo
    senha: password
}

console.log(InfoUsuario)

// Exibindo o conteudo da variável 'password' e 'grupo' para fins de depuração
console.log({password})
console.log({grupo})
console.log({password, grupo})