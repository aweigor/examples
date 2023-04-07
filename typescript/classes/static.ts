class UserService {
  private static db: any;

  static getUser(id: number) {
    return UserService.db.findById(id);
  }

  constructor(id: number) {}

  create() {
    UserService.db;
  }

  static {
    UserService.db = 'asd';
  }
}

UserService.getUser(1);

const inst = new UserService(1);

// static methods alloud inside of non-static methods
inst.create();