type Alphaneumeric = string | number | boolean;
const formatValue = (value: Alphaneumeric) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (value === true) {
    return false;
  } else {
    return true;
  }
};

type StringOrArr = string | number[];

const getLength = (value: StringOrArr) => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

//------------------------------------------

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}
//------------------------------------------

type ArrayOfItems = {
  title: string;
  rating: number;
}[];

const filterByRating = (value: ArrayOfItems) => {
  const mappedValue = value.filter((value) => value.rating > 4);
  return mappedValue;
};

//---------------------------------