let strOrNum: string | number = 5;

if (Math.random() > 0.5) {
  strOrNum = 5;
} else {
  strOrNum = 'srt';
}

if (typeof strOrNum === 'string') {
  console.log(strOrNum);
} else {
  console.log(strOrNum);
}

let str2OrNum: typeof strOrNum;

const user = {
  name: 'Vasya'
};

type keyOfUser = keyof typeof user;

enum Direction {
  Up,
  Down
}

type d = keyof typeof Direction;