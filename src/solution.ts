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

