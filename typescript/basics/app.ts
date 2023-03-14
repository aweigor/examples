function getFullName(userEntity: { firstname: string, surname: string }) {
  return `${userEntity.firstname} ${userEntity.surname}`;
}

const getFullYearArrow = (firstname: string, surname: string): string => {
  return `${firstname} ${surname}`;
}

const user = {
  firstname: 'John',
  surname: 'Doe',
  city: 'Kasablanca',
  age: 30,
  skills: {
    dev: true,
    devops: true
  }
}

console.log(getFullYearArrow('hey', 'hoe'));
console.log(getFullName(user));

export {};