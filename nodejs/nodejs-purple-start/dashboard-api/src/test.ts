function DefineComponentId(id: number) {
  return (target: Function) => {
    target.prototype.id = id;
  }
}

function Logger() {
  console.log('init logger');
  return (target: Function) => {
    console.log('run logger', target);
  }
}

function Method(
  target: Object, 
  propertyKey: string, 
  propertyDescriptor: PropertyDescriptor
) {
  const oldValue = propertyDescriptor.value;
  propertyDescriptor.value = function (...args: any[]) {
    return args[0] * 10;
  }
}

function Prop(
  target: Object,
  propertyKey: string
) {
  let value: number;

  const getter = () => {
    return value;
  }

  const setter = (newValue: number) => {
    console.log('Set!');
    value = newValue;
  }

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter
  })
}

function Param(
  target: Object,
  propertyKey: string,
  index: number
) {
  console.log(propertyKey, index);
}

@Logger()
@DefineComponentId(1)
export class User {
  @Prop id?: number;

  @Method
  updateId(newId: number) {
    this.id = newId;
    return this.id;
  }
}

//console.log(new User().id);