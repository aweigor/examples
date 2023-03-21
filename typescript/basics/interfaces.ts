interface UserIntfs {
  name: string,
  age: number,
  skills: string[]
}

interface RoleIntfs {
  roleId: number;
}

interface UserWithRole extends UserIntfs, RoleIntfs {
  createdAt: Date;
}

let userFromInterface: UserWithRole = {
  name: 'asd',
  age: 33,
  skills: ['read', 'write'],
  roleId: 2,
  createdAt: new Date()
}

// Dynamic declaration
interface UserDic {
  [index: number]: User
}

type UserDicT = {
  [index: number]: User
}