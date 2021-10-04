// String
let color = 'blue';

// Number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;

// Boolean
let isDone = false;

let list: Array<number> = [1, 2, 3];
let list2: number[] = [1, 2, 3];

// TypeScript 에서는 에러
let list3: number[] = [1, 2, 'Hi'];

let x: [string, number];
// 초기화
x = ['hello', 10];
// 잘못된 초기화
x = [10, 'hello'];

console.log(x[0].substring(1)); // 성공
console.log(x[1].substring(1)); // 오류, 'number'에는 'substring' 이 없습니다.

x[3] = 'world'; // 오류, '[string, number]' 타입에는 프로퍼티 '3'이 없습니다.
console.log(x[5].toString());

let obj: object = {};
let person: { name: string; age: number } = {
  name: 'Julio',
  age: 20,
};

function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20); // 유효
sum(10, 20, 30); // 에러

function hello(name: string, age?: number): string {
  if (age) {
    return `Hello World, ${name}(${age})`;
  } else {
    return `Hello World, ${name}`;
  }
}

hello('Julio'); // 유효
hello('Julio', 20); // 유효
hello('Julio', 10, 20);
