interface IUserService {
  users: number;
  getUsersInDatabase(): number
}

class UserService implements IUserService {
  users: number = 1000;

  @Log
  getUsersInDatabase(): number {
      throw new Error('error')
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

export {};