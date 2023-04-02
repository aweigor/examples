interface ILogger {
  log(...args): void;
  error(...args): void;
}

class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }
  async error(...args: any[]): Promise<void> {
    console.log(...args);
  }
}

interface IPayable {
  pay(paymentId: number): void;
  price?: number;
}

interface IDeletable {
  delete(): void;
}

class Userr implements IPayable, IDeletable {
  delete(): void {
    console.log('deleteing');
  }
  pay(paymentId: number | string): void {
    ///
  }
  price?: number | undefined;
}

