type Constructor = new (...args: any[]) => {}

type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
  constructor(public items: string[]) {};
}

class Accordion {
  isOpened?: boolean;
  constructor(public items: string[]) {};
}

type ListType = GConstructor<List>;
type AccordionType = GConstructor<Accordion>;

class ExtendedListClass extends List {
  first() {
    return this.items[0];
  }
}

function ExtendedList<TBase extends AccordionType & ListType>(Base: TBase) {
  return class ExtendedList extends Base {
    first() {
      return this.items[0];
    }
  }
}

class AccordionList {
  isOpened?: boolean;
  constructor(public items: string) {}
}

const list = ExtendedList(Accordion);
const res = new list(['first', 'second']);
console.log(res.first());

export {};