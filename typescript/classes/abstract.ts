abstract class Controller {
  abstract handle(req: any): void;

  handleWithLogs(req: any) {
    console.log('Start');
    this.handle(req);
    console.log('End');
  }
}

class UserController extends Controller {
  handle(req: any): void {
    console.log(req);
  }
}

const c = new UserController();
c.handleWithLogs('Request');


// excercise
abstract class Logger {
  abstract log(message: string): void;

  printDate(date: Date) {
    this.log(date.toString());
  }
}

class SimpleLogger extends Logger {
  log(message: string): void {
    console.log(message);
  }
  logWithDate(message: string) {
    this.printDate(new Date());
    this.log(message);
  }
}