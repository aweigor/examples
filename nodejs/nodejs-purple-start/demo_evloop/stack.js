// const a = 5;

// function double(a) {
//   return a * a;
// }

// function logDouble(a) {
//   console.log(double(a));
// }

// console.log(`Старое значение ${a}`);
// logDouble(a);

const a = 5;

function b () {
  return c();
}

function c() {
  return d();
}

function d() {
  console.log(a);
}

setTimeout(() => {
  console.log('TImeout')
}, 1000)

b();