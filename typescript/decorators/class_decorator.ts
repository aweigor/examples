interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

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

function nullUserAdvanced<T extends { new(...args: any[]): {} }>(constructor: T, _context: any) {
  return class extends constructor {
    users = 3;
  }
}

console.log(new UserService().getUsersInDatabase());

export {};