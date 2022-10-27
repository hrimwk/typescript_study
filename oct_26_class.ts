//class
//멤버변수는 미리 선언
class Car {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
}
const bmw = new Car("red");

//멤버변수 미리 선언안하는 방법
class Car2 {
  //color: string;
  constructor(readonly color: string) {
    this.color = color;
  }
}

//접근제한자(Access modifier) - public, private, protected
//public	자식클래스, 클래스 인스턴스 모두 접근 가능
//protected	- 자식 클래스에서 접근 가능
//private	해당 클래스 내부에서만 접근 가능

//readonly 프로퍼티는 수정이 불가
//수정하고 싶으면 컨스트럭터 내부에서 설정해주어야함
class Car3 {
  readonly name2: string = "car";
  color: string;
  constructor(color: string, name2) {
    this.color = color;
    this.name2;
  }
  start() {
    console.log("start");
    console.log(this.name2);
  }
}

class Bmw2 extends Car3 {
  constructor(color: string, name2) {
    super(color, name2);
  }
  showName() {
    console.log(super.name2);
  }
}
const bmw2 = new Car2("red", "zzz1");

//static
class Car4 {
  readonly name: string = "car";
  color: string;
  static wheel = 4;
  constructor(color: string, name) {
    this.color = color;
    this.name;
  }
  start() {
    console.log("start");
    console.log(this.name);
    console.log(Car4.wheel);
    //static은 this가 아닌 클래스명으로
  }
}

class Bmw extends Car4 {
  constructor(color: string, name) {
    super(color, name);
  }
  showName() {
    console.log(super.name);
  }
}
//추상 class
abstract class Car5 {
  color: string;

  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

class Bmw4 extends Car5 {
  constructor(color: string) {
    super(color);
  }
}
