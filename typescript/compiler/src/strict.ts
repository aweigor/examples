function test(a: number): number {
  return a;
}

type StrOrNumFunc = (a: number | string) => number;

//let f: StrOrNumFunc = test;

// test.apply(undefined, [1, 3]);

class A {
  b: number;

  test() {
    return function() {
      // вызовет предупреждение strict
      // this.b
    }
  }
}

class User {
  public role: string;

  constructor(role) {
    this.role = role;
  }
}

function createUser(user: User) {
  // логика
  const defaultUser = new User('default');
  defaultUser.role = undefined;

  // noFallthroughCasesInSwitch
  switch (user.role) {
    case "a": {
      const a = 7;
    }
    case "b": {
      const b = 10;
    }
  }
}


interface IChecks {
  drive: boolean,
  [check: string]: boolean;
}

// noUncheckedIndexedAccess
const c: IChecks = {'kpp': true};
const d = c['drive'];