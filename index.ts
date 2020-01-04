const name = 'GI',
  age = 28,
  gender = 'male';

const sayHello = (name: string, age: number, gender?) =>
  console.log(
    `${name},!! Welcomes , You are ${age}  ${gender ? 'and ' + gender : ''}`
  );

sayHello(name, age, gender);

export {};
