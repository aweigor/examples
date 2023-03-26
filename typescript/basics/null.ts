const n: null = null;

const n2: number = null;

interface User {
  name: string
}

function getUser() {
  if (Math.random() > 0.5) {
    return;
  } else {
    return {
      name: 'Вася'
    } as User
  }
}

const user = getUser();
const n3 = user.name;