const allUpper = (str) => {
  return str.toUpperCase();
};

const upperFirstWord = (str) => {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const upperLastWord = (str) => {
  const splitArray = str.split(" ");
  splitArray[splitArray.length - 1] =
    splitArray[splitArray.length - 1].toUpperCase();
  return splitArray.join(" ");
};

const transform = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`New string: ${fn(str)}`);
  console.log(`Function used: ${fn.name}`);
};

transform("javascript is the best", allUpper);
transform("javascript is the best", upperFirstWord);
transform("javascript is the best", upperLastWord);
