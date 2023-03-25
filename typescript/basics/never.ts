// funtion never returns result
function generateError(message: string): never {
  throw new Error(message);
}

// function never ends
function dumpError(): never {
  while(true) {};
}

// recursion never ends
function rec(): never {
  return rec();
}

// never not valid
const a: void = undefined;

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
  switch (action) {
    case 'refund': 
      //...
      break;
    case 'checkout':
      //...
      break;
    default:
      // _ disables typescript for unused variable
      // checks switch for additional conditions
      // error on case of reject option is a string
      // const _: never = action;
      throw new Error('No action with this name');
  }
}

function isString(x: string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if (typeof x === 'number') {
    return false;
  }
  generateError('no');
}