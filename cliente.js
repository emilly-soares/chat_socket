const readline = require('readline');
const net = require('net');

// Criar um cliente de socket
const client = net.createConnection({
  host: 'localhost',
  port: 3001
});

// Configurar a interface para leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para enviar mensagem
function sendMessage() {
  rl.question('Cliente: ', (input) => {
    if (input === 'close') {
      client.end();
    } else {
      client.write(input);
    }
  });
}

// Lidar com mensagens do servidor
client.on('data', (input) => {
  console.log('Servidor:', input.toString('utf8'));
  sendMessage(); // Chama a função sendMessage para aguardar a próxima mensagem do usuário
});

// Lidar com a desconexão do servidor
client.on('close', () => {
  console.log('Conexão fechada');
});

// Inicia o processo de envio da mensagem
sendMessage();
