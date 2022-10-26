//literal types
const userName = "Sam"; //문자열 리터럴 타입
let userName2: string | number = "Tom";
userName2 = 2;

type Job = "police" | "teacher" | "doctor";

interface User {
  name: string;
  job: Job;
}

const user: User = {
  name: "bob",
  job: "doctor", // 타입에 없는 내용 쓰면 오류
};

//Union Types
//식별가능한 유니언 타입 or의미
interface Car {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  //gift.start(); gift에는 start함수가 없어서 오류

  //검사할 내용이 많아지면 switch 사용
  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
}

//Intersection Types
//and를 의미 여러타입을 하나로 만들어줌
interface Car2 {
  name: string;
  start(): void;
}

interface Toy2 {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy2 & Car2 = {
  name: "타요",
  start() {},
  color: "blue",
  price: 1000,
  //전체를 다 쳐야함
};
