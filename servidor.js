const readline = require('readline');
const net = require('net');

const porta = 3001;

// Criar um servidor de socket
const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  // Configura a interface para leitura
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Função para enviar mensagem
  function sendMessage() {
    rl.question('Servidor: ', (input) => {
      if (input === 'close') {
        socket.end();
      } else {
        socket.write(input);
      }
    });
  }

  // Lidar com mensagens do cliente
  socket.on('data', (input) => {
    console.log('Cliente:', input.toString('utf8'));
    sendMessage();
  });

  // Lidar com a desconexão do cliente
  socket.on('close', () => {
    console.log('Conexão fechada');
  });
  
  sendMessage();
});

// Começar a escutar por novas conexões
server.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});
