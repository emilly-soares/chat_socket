const readline = require('readline');

// Configurar a interface para leitura do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Perguntar ao usuário e processar a entrada
rl.question('Digite um número para ver sua tabuada: ', (input) => {
  const numero = parseInt(input);

  if (!isNaN(numero)) {
    console.log(`Número digitado foi ${numero}:`);
    rl.close(); 
  } else {
    console.log("Número inválido. Tente novamente.");
    rl.close(); // Fechar a interface de leitura em caso de número inválido
  }
});