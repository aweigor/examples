const factorial = require('./factorial');
const { Worker } = require('worker_threads');

const power = (facts) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
      workerData: {
        facts
      }
    });

    worker.on('message', (msg) => {
      console.log(worker.threadId);
      resolve(msg);
    });

    worker.on('error', (err) => {
      reject(err);
    })

    worker.on('exit', () => {
      console.log('worker done');
    })
  });
};


const main = async () => {
  try {
    performance.mark('start');
    const result = await Promise.all([
      power([25,20,19,48,30,50]),
      power([25,20,19,48,30,50]),
      power([25,20,19,48,30,50]),
      power([25,20,19,48,30,50]),
      power([25,20,19,48,30,50])
    ]);
    console.log(result);
    performance.mark('end');
    performance.measure('main', 'start', 'end');
    console.log(performance.getEntriesByName('main').pop());
  } catch (err) {
    console.error(err);
  }
  
};

main();