import 'reflect-metadata';

interface IUserService {
  users: number;
  getUsersInDatabase(): number
}

class UserService implements IUserService {
  
  private _users: number;
  
  @MaxLog(100)
  set users(num: number) {
    this._users = num;
  }

  get users() {
    return this._users;
  }

  @Log
  getUsersInDatabase(): number {
      throw new Error('error')
  }

  setUsersInDatabase(@Positive() num: number): void {
    throw new Error('error')
  }
}

function MaxLog(max: number) {
  return (
    target: Object,
    _: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const set = descriptor.set;
    descriptor.set = (...args: any) => {
      console.log(args);
      set?.apply(target, args);
    }
  }
}

function Max(max: number) {
  return (
    target: Object,
    propertyKey: string | symbol
  ) => {
    let value: number;
    const setter = function (newValue: number) {
      if (newValue > max) {
        console.log(`Нельзя установить значение больше ${max}`)
      } else {
        value = newValue;
      }
    }
    const getter = function () {
      return value;
    }

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    })
  }
}

function Log(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void  {
  console.log(target)
  console.log(propertyKey)
  console.log(descriptor)
  descriptor.value = () => {
    console.log('no error');
  }
}

const POSITIVE_METADATA_KEY = 'positive';

// Можно валидировать параметры в рантайме
function Positive() {
  return (
    target: Object,
    propertyKey: string,
    parameterIndex: number
  ) => {
    console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
    console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey));
    console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey));
    let existParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey)
    existParams.push(parameterIndex);
    Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey);
  }
}

function Validate() {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ) => {
    let method = descriptor.value;
    descriptor.value = function (...args: any) {
      let positiveParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);
      if (positiveParams) {
        for (let index of positiveParams) {
          if (args[index] < 0) {
            console.log('Число доджно быть больше нуля')
          }
        }
      }
    }
  }
}

const userService = new UserService();
userService.users = 1;
userService.users = 1000;

export {};