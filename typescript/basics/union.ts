function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

function logObject(obj: { a:number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

function logMultipleIds(a: string | number, b: string | number) {
  if (a === b) {

  } else {
    console.log(a);
  }
}