interface User {
  name: string;
  age?: number;
  email?: string;
}

type partial = Partial<User>;
const p: partial = {};

type required = Required<User>;
type readonly = Readonly<User>
type requiredAndReadonly = Required<Readonly<User>>;