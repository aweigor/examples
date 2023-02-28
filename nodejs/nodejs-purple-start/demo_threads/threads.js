const factorial = require('./factorial');

const power = (facts) => {
  const arr = [];
  for (let i = 0; i < 100000000; i++) {
    arr.push(i*i);
  }
  return facts.map(el => factorial(el));
};


const main = () => {
  performance.mark('start');
  const result = [
    power([25,20,19,48,30,50]),
    power([25,20,19,48,30,50]),
    power([25,20,19,48,30,50]),
    power([25,20,19,48,30,50]),
    power([25,20,19,48,30,50])
  ];
  console.log(result);
  performance.mark('end');
  performance.measure('main', 'start', 'end');
  console.log(performance.getEntriesByName('main').pop());
};

main();