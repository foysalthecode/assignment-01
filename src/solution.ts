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

type ArrayOfItems = {
  title: string;
  rating: number;
}[];

const filterByRating = (value: ArrayOfItems) => {
  const mappedValue = value.filter((value) => value.rating > 4);
  return mappedValue;
};

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


const getUniqueValues = (arr1: any, arr2: any) => {
  const unique: number[] = [];
  for (let i = 0; i <= arr1.length; i++) {
    let exist: boolean = false;
    for (let j = 0; j <= unique.length; j++) {
      if (arr1[i] === unique[j]) {
        exist = true;
        break;
      }
    }
    if (!exist) {
      unique[unique.length] = arr1[i];
    }
  }

  for (let i = 0; i <= arr2.length; i++) {
    let exist = false;
    for (let j = 0; j <= unique.length; j++) {
      if (arr2[i] === unique[j]) {
        exist = true;
        break;
      }
    }
    if (!exist) {
      unique[unique.length] = arr2[i];
    }
  }
  return unique;
};

type productType = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}[];
const calculateTotalPrice = (value: productType) => {
  const totalPrice = value.reduce((acc, product) => {
    if (product.discount) {
      const discount = product.discount / 100;
      const discountedPrice = product.price * product.quantity * discount;
      const totalPrice = product.price * product.quantity - discountedPrice;
      return acc + totalPrice;
    } else {
      return acc + product.price * product.quantity;
    }
  }, 0);

  return totalPrice;
};
