//utility

//keyof

interface User6 {
  id: number;
  name: string;
  age?: number;
  gender: "m" | "f";
}

type UserKey = keyof User6; //"id"|"name"|"age"|"gender"

const uk: UserKey = "age";

//partial<T>
let admin: Partial<User6> = {
  id: 1,
  name: "bob",
};

//Required<T>
//모든 프로퍼티를 필수로
let admin2: Required<User6> = {
  id: 2,
  name: "bob",
  age: 30,
  gender: "m",
};

//Readonly<T>
//처음 할당만 가능하고 이후에 수정 불가

//Record<K,T>
interface User111 {
  id: number;
  name: string;
  age: number;
}

function isValid(user: User111) {
  const result: Record<keyof User111, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };
  return result;
}

//Pick<T,K>
//특정 프로퍼티만 사용
interface User1111 {
  id: number;
  name: string;
  age: number;
  gender: "M" | "W";
}

const admin11: Pick<User1111, "id" | "name"> = {
  id: 0,
  name: "bobå",
};

//Omit<T,K>
//특정 프로퍼티 생략하고 사용가능

const admin111: Omit<User1111, "age" | "gender"> = {
  id: 0,
  name: "bob",
};

//Exclude<T1,T2>
//omit과 차이는 omit은 특정 프로퍼티만 생략, exclude는 타입으로 생략
//T1의 타입중 2와 겹치는 것을 생략

type T1 = string | number | boolean;
type T2 = Exclude<T1, number | boolean>;

//NonNullable<Type>
