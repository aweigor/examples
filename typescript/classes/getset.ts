class User {
  _login: string;
  password: string;

  set login(l: string | number) {
    this._login = 'user-' + l;
  }

  get login(): string {
    return this._login;
  }
}

const user = new User();
user.login = 'myLogin';

console.log()