const factorial = require('./factorial');
const { parentPort, workerData } = require('worker_threads');

const power = ({ facts }) => {
  const arr = [];
  for (let i = 0; i < 100000000; i++) {
    arr.push(i*i);
  }
  return facts.map(el => factorial(el));
};

parentPort.postMessage(power(workerData))