const crypto = require('crypto');
const start = performance.now();
const https = require('https');

//process.env.UV_THREADPOOL_SIZE = 6;

// for (let i = 0; i < 50; i++) {
//   crypto.pbkdf2('pwd', 'salt', 100000, 64, 'sha512', () => {
//     console.log(performance.now() - start);
//   });
// }

for (let i = 0; i < 50; i ++) {
  https.get('https://yandex.ru', (res) => {
    res.on('data', () => {});
    res.on('end', () => {
      console.log(performance.now() - start);
    });
  })
}