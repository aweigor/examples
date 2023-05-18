interface Prototype<T> {
  clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
  createdAt: Date;
  constructor(public email: string, public name: string) {
    this.createdAt = new Date();
  }
  clone(): UserHistory {
    let target = new UserHistory(this.email, this.name);
    target.createdAt = this.createdAt;
    return target;
  }
}

// prorotype
let user = new UserHistory('a@a.ru', 'asd');
console.log(user);
let user2 = user.clone();
// prorotype
console.log(user2);

export {};