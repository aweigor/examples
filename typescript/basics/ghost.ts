let a = 5;
let b: string = a.toString();
// not valid only String
let e: string = new String(a).valueOf();
let f: boolean = new Boolean(a).valueOf();

let c = 'asd';
let d: number = parseInt(c);

interface User {
  name: string;
  email: string;
  login: string;
}

// as ..., <...> - synonims
const user2: User = {
  name: 'Bob',
  email: 'bobik@lll.com',
  login: 'bobby'
}

interface Admin {
  name: string;
  role: number;
}

// cast interface (bad example)
const admin: Admin = {
  ...user2,
  role: 1
}

// cast type, good example
function userToAdmin(user: User): Admin {
  return {
    name: user.name,
    role: 1
  }
}