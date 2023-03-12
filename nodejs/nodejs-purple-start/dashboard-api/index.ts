import express from 'express';

const port = 8000;
const app = express();

//  будет вызвано вместе с get
app.all('/hello', (req, res, next) => {
  console.log('All');
  next();
});

const cb = (req, res, next) => {
  console.log('CB');
  next()
}

// паттерны: hel?lo hel+lo hel*lo he(la)?lo
// можно создавать цепочки функций
app.get('/hello', cb, (req, res) => {
  res.send('Hello!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})