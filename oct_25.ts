//함수
function add(num1: number, num2: number): number {
  return num1 + num2;
}

function hello(name?: string) {
  return `hello", ${name || "world"}`;
}

const result = hello();
const result2 = hello("Anne");

//선택적 매개변수가 필수보다 앞으로 가면 안됨
function helloAll(name: string, age?: number) {
  if (age !== undefined) {
    return `hello", ${name}. You are ${age}`;
  } else {
    return `hello ${name}`;
  }
}

const allResult = helloAll("Anne"); //"hello Anne"
const allResult2 = helloAll("Anne", 10); //"hello Anne you are 10"

//선택적 매개변수를 앞에 쓰고 싶을 때
function helloAll2(age: number | undefined, name: string) {
  if (age !== undefined) {
    return `hello", ${name}. You are ${age}`;
  } else {
    return `hello ${name}`;
  }
}
console.log(helloAll2(undefined, "Sally"));

//나머지 매개변수 작성법
function add2(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

add2(1, 2, 3); //6
add2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55

//this
interface User11 {
  name: string;
}

const Sam: User11 = { name: "Sam" };

//매개변수는 두개
function showName(this: User, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a(30, "m");

//overloading
interface User22 {
  name: string;
  age: number;
}
//동일한 매변수도 타입을 다르게 할당할 수 있기때문에 타입을 확신할 수 없다 생각
function join(name: string, age: number): User22;
function join(name: string, age: string): string;
function join(name: string, age: number | string): User22 | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력해주세요.";
  }
}
const emma: User22 = join("Emma", 30);
const jane: User22 = join("Jane", 20);
