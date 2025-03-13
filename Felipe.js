console.log(5*null)//0
console.log("5" - 3)//2
console.log("5"+1)//51
console.log("dois" * "três")
console.log(`A soma de 2 + 2 é ${2 + 2}`)



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Qual é o seu nome:?', nome => {
    console.log(`Olá, ${nome}!`);
    readline.close();
});