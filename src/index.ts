class Person {
  public name: string;
  public age: number;
  public gender: string;
  static dname = 'GEONILAJNG';
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const gi = new Person('GI', 29, 'male');

const name = 'GI',
  age = 28,
  gender = 'male';

const sayHello = (name: string, age: number, gender?): boolean => {
  console.log(
    `${name},!! Welcomes , You are ${age}  ${gender ? 'and ' + gender : ''}`
  );
  return true;
};

if (sayHello(name, age, gender)) {
  console.log('welcome you');
  console.log(Person.dname);
}

const welcome = (p: Person): string => {
  return `${p.name} - ${p.age} - ${p.gender}`;
};
console.log(welcome(gi));

export {};
