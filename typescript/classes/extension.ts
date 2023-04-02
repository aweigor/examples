type PaymentStatus = 'new' | 'paid';

class Payment {
  id: number;
  status: PaymentStatus = 'new';

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = 'paid';
  }
}

class PersistantPayment extends Payment {
  databaseId: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id);
  }

  save() {
    // Save to db
  }

  // ! important = date not required
  override pay(date?: Date) {
    // override method
    super.pay();
    if (date) {
      this.paidAt = date;
    }
  }
}