class UserService {
  private static db: any;

  static getUser(id: number) {
    return this.db.findById(id);
  }
}

UserService.getUser(1);