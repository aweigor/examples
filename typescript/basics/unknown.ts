let input: unknown;

input = 3;
input = ['sf', 'sdf'];

// ! not valid syntax, unknown more strict
//let res: string = input;

function run(i: unknown) {
  if (typeof i == 'number') {
    i++;
  } else {
    // i still unknown
  }
}

run(input);

async function getData() {
  try {
    await fetch('');
  } catch(error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }  
}

async function getDataForce() {
  try {
    await fetch('');
  } catch(error) {
    const e = error as Error;
    console.log(error.message)
  }  
}

// unknown
type U1 = unknown | number;

// string
type I1 = unknown & string;

// use instead of any when type is not able to define