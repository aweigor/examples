process.on('message', (msg) => {
  if (msg == 'disconnect') {
    process.disconnect();
    return;
  };
  console.log(`Received: ${msg}`);
  process.send('Pong!');
})