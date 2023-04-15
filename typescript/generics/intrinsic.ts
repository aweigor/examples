const num: Array<number> = [1, 2, 3];

async function test() {
  const a = await new Promise<number>((resolve, reject) => {
    resolve(1);
  })
}

const check: Record<string, boolean> = {
  drive: true,
  kpp: false
}

function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

const res = logMiddleware<number>(10);

function getSplitedHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.slice(0, 1);
}

getSplitedHalf<number>([1, 3, 5]);