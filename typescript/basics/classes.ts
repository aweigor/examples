class User {
  name: string;

  constructor (name: string) {
    this.name = name;
  }
}

const user = new User('Name');

class Admin {
  role: number
}

const admin = new Admin();
admin.role = 1;