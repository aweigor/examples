class User {
  constructor(public id: number, public name: string) {}
}

function getData(id: number) {
  return new User(id, 'John');
}
//type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type RT = ReturnType<typeof getData>;

//type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
type PT = Parameters<typeof getData>;

type first = PT[0];

// parameters for classes
//type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
type CP = ConstructorParameters<typeof User>;

export {}