const fs = require('fs');

console.log('Init');

setTimeout(() => {
  console.log(performance.now(), 'Timer 0');
}, 100);

setImmediate(() => {
  console.log('Immediate');
});

fs.readFile(__filename, () => {
  console.log('File readed');
});

setTimeout(() => {
  for (let i = 0; i < 1000000000; i++) {};
  console.log('Done');
  // Promise and nextTick resolves between cycles
  Promise.resolve().then(() => {
    console.log('Promise inside timeout');
  });
  // NextTick resolves before Promise
  process.nextTick(() => {console.log('Tick')});
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

process.nextTick(() => {console.log('Tick')});

console.log('Final');