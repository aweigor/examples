export const characters = [
  'Фродо',
  'Бильбо'
];

export function greet(character) {
  console.log('Hello ' + character);
};

const log = () => console.log('defaul export');
export default log;