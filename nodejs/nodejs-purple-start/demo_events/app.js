const EventEmitter = require('events');

const myEmitter = new EventEmitter();
const logDbConnection = () => {
  console.log('DB connecterd');
};

myEmitter.addListener('connected', logDbConnection);
myEmitter.emit('connected');

myEmitter.removeListener('connected', logDbConnection);
myEmitter.emit('connected');

// Called after prepend
myEmitter.on('msg', (data) => {
  console.log(`Получил: ${data}`);
})
// Called first
myEmitter.prependListener('msg', (data) => {
  console.log(`Prepend`);
})

myEmitter.emit('msg', 'Get my message');

// Emit once, removes after emitted
myEmitter.once('off', () => {
  console.log('Called once')
})
myEmitter.emit('off');
myEmitter.emit('off');

// Max listeners limit
console.log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(1)
console.log(myEmitter.getMaxListeners());

// Show count of listeners
console.log(myEmitter.listenerCount('msg'));

myEmitter.on('error', (err) => {
  console.log(`Произошда ошибка ${err.message}`);
});

myEmitter.emit('error', new Error('boom'));


// Target events
const target = new EventTarget();
const logTarget = () => {console.log('Connected to target');}
target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));