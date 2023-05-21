interface IPaymentAPI {
  getPaymentDetail(id: number): IPaymentDetail | undefined;
}

interface IPaymentDetail {
  id: number;
  sum: number;
}

class PaymentAPI implements IPaymentAPI {
  private data = [{ id: 1, sum: 10000 }];
  getPaymentDetail(id: number): IPaymentDetail | undefined {
    return this.data.find(d => d.id === id);
  }
}

class PaymentAccessProxy {
  constructor(private api: PaymentAPI, private userId: number) {}; 
  getPaymentDetail(id: number): IPaymentDetail | undefined {
    if (this.userId === 1) {
      return this.api.getPaymentDetail(id);
    }
    console.log()
  }
}

export {};