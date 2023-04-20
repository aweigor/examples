/*

  {
    '1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
    '2': [ { group:2, name: 'c' } ]
  }
*/

interface Data {
  group: number;
  name: string;
}

const data: Data[] = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' }
];

interface IGroup<T> {
  [key: string]: T[]
}

type key = string | number | symbol;

function aggreagte<T extends Record<key, any>>(data: T[], key: keyof T)  {
  return data.reduce<IGroup<T>>((acc: IGroup<T>, item) => {
    const itemKey = item[key];
    let curEl = acc[itemKey];
    if (Array.isArray(curEl)) {
      curEl.push();
    } else {
      curEl = [item];
    }
    acc[itemKey] = curEl;
    return acc;
  }, {})
}

const res = aggreagte<Data>(data, 'group');
console.log(res);