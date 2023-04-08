class Payment {
  private date: Date = new Date();

  getDate(this: Payment) {
    return this.date;
  }

  getDateArrow = () => {
    return this.date;
  }
}

const p = new Payment();

const u= {
  id: 1,
  paymentDate: p.getDate.bind(p),
  paymentDateArrow: p.getDateArrow()
}

class PaymentPersistant extends Payment {
  save() {
    return super.getDate();
  }
}

class UserBuilder {
  name: string;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder
  }
}

class AdminBuilder extends UserBuilder {
  rules: string[];
}

const res = new UserBuilder().setName('Вася');
const res2 = new AdminBuilder().setName('Вася');

let user: UserBuilder | AdminBuilder = new UserBuilder();

if (user.isAdmin()) {
  console.log(user)
} else {
  console.log(user)
}