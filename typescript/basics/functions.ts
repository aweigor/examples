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

// spread typings
const arr: [number, string, ...boolean[]] = [1, 'asd', true, false];

console.log(res);