const start = performance.now();

setTimeout(() => {
  console.log(performance.now() - start);
  console.log('Прошла секунда')
}, 1000);

function myFunc(arg) {
  console.log(`Argument => ${arg}`)
}

setTimeout(myFunc, 1500, 'Cool');


// Clearing timeout
const timerId1 = stTimeout(() => {
  console.log('boom');
}, 5000);
setTimeout(() => {
  clearTimeout(timerId1);
  console.log('cleared');[]
}, 1000);


// Clearing interval
const intervalId = setTinterval(() => {
  console.log(performance.now());
}, 1000);
setTimeout(() => {
  clearInterval(timerId);
  console.log('cleared');[]
}, 1000);


// Set immediate working after stack is empty
console.log(`Before`);
setImmediate(() => {
  console.log('After all');
})
console.log(`After`);

// Temporarily disable timer
const timerId = setTimeout(() => {
  console.log('boom');
}, 5000);
timerId.unref();
setImmediate(() => {
  timerId.ref();
})