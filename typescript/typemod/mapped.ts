type Modifier = 'read' | 'write' | 'create';

type UserRoles = {
  customers?: Modifier,
  projects?: Modifier,
  adminPanel?: Modifier
}

// map type - gets UserRoles 
type ModifierToAccess<Type> = {
  +readonly[Property in keyof Type as Exclude<`canAccess${string & Property}`, 'canAccessAdminPanel'>]-?: boolean;
}

/*
type UserAccess2 = {
    readonly canAccesscustomers: boolean;
    readonly canAccessprojects: boolean;
    readonly canAccessadminPanel: boolean;
}
*/
type UserAccess2 = ModifierToAccess<UserRoles>;

type UserAccess1 = {
  customers?: boolean,
  projects?: boolean,
  adminPanel?: boolean
}

export {};