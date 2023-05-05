interface IUserService {
  users: number;
  getUsersInDatabase(): number
}

class UserService implements IUserService {
  @Max(100)
  users: number = 1000;

  @Log
  getUsersInDatabase(): number {
      throw new Error('error')
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

const userService = new UserService();
userService.users = 1;
userService.users = 1000;

export {};