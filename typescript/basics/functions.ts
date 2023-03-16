/* Arrays */

const skills: string[] = ['Dev', 'DevOps', 'Testing'];

for(const skill of skills) {
  console.log(skill.toLowerCase());
}

// typed as string then as number
const res = skills
  .filter(s => s !== 'DevOps')
  .map(s => { return 1 })
  .reduce((a, b) => a + b);

/* Typles */
const skill: [number, string] = [1, 'Dev'];
const id = skill[0];
const skillName = skill[1]; // index 2 not valid

// Readonly
const roparams: readonly string[] = ['Fooo', 'Bars'];

// spread typings
const arr: [number, string, ...boolean[]] = [1, 'asd', true, false];


// enums
// by default - index of array
enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS = 'in_process',
  FAILED = 2
}

const enumres = {
  message: '',
  statusCode: StatusCode.SUCCESS
}

if (enumres.statusCode === StatusCode.IN_PROCESS) {
  //...
}

// contant enum, replaces value with given
const enum Roles {
  ADMIN = 1,
  USER = 2
}

console.log(res);