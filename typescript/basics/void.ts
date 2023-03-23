function logId(id: string | number): void {
  console.log(id);
}

const a = logId(1);

// void or undefined?
function multiply(f: number, s?: number): number | void {
  if (!s) {
    return f * f;
  }
}

type voidFunc = () => void;

const f1: voidFunc = () => {
}

const f2: voidFunc = () => {
  return true;
}

const b = f2();

const skills = ['read', 'write'];

const userVoid = {
  s: []
}

skills.forEach((skill) => userVoid.s.push(skill));