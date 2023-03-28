interface anotherUser {
  name: string;
}

const a = {};

assertUser(a);
a.name = 'Вася';

function assertUser(obj: unknown): asserts obj is anotherUser {
  if (typeof obj === 'object' && !!obj && 'name' in obj) {
    return;
  }
  throw new Error('Не пользователь');
}