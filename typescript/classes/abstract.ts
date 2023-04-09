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