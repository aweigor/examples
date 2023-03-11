import http from 'http';

const host = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCOde = 200;
  res.setHeader('Content-TYpe', 'text/plain');
  res.end('Привет!');
});

server.listen(port, host, () => {
  console.log(`Сервер запущен на ${host} ${port}`)
})