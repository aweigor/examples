function test(a: number): number {
  return a;
}

type StrOrNumFunc = (a: number | string) => number;

//let f: StrOrNumFunc = test;

test.apply(undefined, [1, 3]);