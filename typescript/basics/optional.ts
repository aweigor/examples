
// optional -question mark
interface User {
  login: string;
  password?: string;
}

const user: User = {
  login: 'm@m.a'
}


function multiply1(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }
  
  return first * second;
}

multiply1(5);

interface UserPro {
  login: string;
  password?: {
    type: 'primary' | 'secondary'
  };
}

// exlamation mark - typescript disabled for this
function testPass(user: UserPro) {
  const t = user.password?.type;
}

function test(param?: string) {
  const t = param ?? multiply1(5);
}