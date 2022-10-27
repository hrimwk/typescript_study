//Generic

function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number>(arr1); //3

const arr2 = ["a", "b", "c"];
getSize<string>(arr2); //2

interface Mobile9<A> {
  name: string;
  price: number;
  option: A;
}

const m1: Mobile9<object> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m2: Mobile9<string> = {
  name: "s20",
  price: 900,
  option: "good",
};
