const readline = require('readline');
const net = require('net');

// Criar um cliente de socket
const client = net.createConnection({
  host: 'localhost',
  port: 3001
});

// Configurar a interface para leitura do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Lidar com mensagens do servidor
client.on('data', (mensagem) => {
  console.log('Mensagem recebida do servidor:', mensagem.toString('utf8'));
});

// Lidar com a desconexão do servidor
/*
client.on('close', () => {
  console.log('Conexão fechada');
});

// Enviar uma mensagem para o servidor
client.write('Olá, servidor!\r\n', () => {
  client.end();  
});*/

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