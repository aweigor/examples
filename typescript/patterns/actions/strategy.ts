class User {
  githubToken: string;
  jwtToken: string;
}

interface AuthStrategy {
  auth(user: User): boolean;
}

class Auth {
  constructor(private strategy: AuthStrategy) {}
  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy;
  }
  public authUser(user: User): boolean {
    return this.strategy.auth(user);
  }
}

class JWTStrategy implements AuthStrategy {
  auth(user: User): boolean {
    if (user.jwtToken) {
      return true;
    }
    return false;
  }
}

class GithubStrategy implements AuthStrategy {
  auth(user: User): boolean {
    if (user.githubToken) {
      return true;
    }
    return false;
  }
}

const user = new User();
user.jwtToken = 'token';
user.githubToken = 'token';

const auth = new Auth(new JWTStrategy());
console.log(auth.authUser(user));
auth.setStrategy(new GithubStrategy())

export {};