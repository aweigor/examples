interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

@nullUser
@log()
@setUsers(2)
@nullUserAdvanced
class UserService implements IUserService {
  users: number;
  getUsersInDatabase(): number {
    return this.users;
  }
}

function nullUser(target: Function, tsss) {
  target.prototype.users = 0;
}

function setUsers(users: number) {
  return (target: Function, _context) => {
    target.prototype.users = users;
  }
}

function log() {
  console.log('log init');
  return (target: Function, _context) => {
    console.log(target);
  }
}

function nullUserAdvanced<T extends { new(...args: any[]): {} }>(constructor: T, _context: any) {
  return class extends constructor {
    users = 3;
  }
}

console.log(new UserService().getUsersInDatabase());

export {};