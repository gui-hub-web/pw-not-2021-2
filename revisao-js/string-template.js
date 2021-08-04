let nome = 'Guilherme'
let idade = 19
let cidade = 'Franca/SP'

console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.')

//Usando String template
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`)


// String template só funciona quando delemitado por ``
console.log(`Daqui a cinco anos, ${nome.toUpperCase()} terá ${idade + 5} anos.`)