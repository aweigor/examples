type User = {
  name: string;
  age: number;
  skills: string[];
}

type Role = {
  id: number;
  name: string
}

// & - and, | - or
type UserRole = User & Role;
// or
type UserWithRoles = {
  user: User,
  role: Role
}

let user: UserRole  = {
  name: 'asd',
  age: 33,
  skills: ['write', 'read'],
  id: 1
}