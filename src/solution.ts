//problem 1 -------------------------

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

//problem 2 ----------------------------

type StringOrArr = string | number[];

const getLength = (value: StringOrArr) => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

// problem 3------------------------------------------

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
//problem 4  ------------------------------------------

type ArrayOfItems = {
  title: string;
  rating: number;
}[];

const filterByRating = (value: ArrayOfItems) => {
  const mappedValue = value.filter((value) => value.rating > 4);
  return mappedValue;
};

//problem 5 ---------------------------------
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[];
const filterActiveUsers = (user: User) => {
  const result = user.filter((user) => user.isActive);
  return result;
};

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

//problem 6 -------------------------------------------
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (value: Book) => {
  const isAvailable = value.isAvailable;
  const available = isAvailable ? "yes" : "no";
  return console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${available}`
  );
};

