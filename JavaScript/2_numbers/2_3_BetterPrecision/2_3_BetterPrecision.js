/*
TODO:
    Create a function that extends the number method toPrecision() to return a stringified number without scientific notation when the exponent is less than 5.
*/
function betterPrecision(num, precision) {
  let result = num.toPrecision(precision);

  index = result.indexOf("e");

  if (index !== -1) {
    let exp = Number(result.slice(index + 1));
    if (exp < 5) {
      result = Number(result).toString();
    }
  }

  return result;
}

console.log(betterPrecision(124, 1));
// '100'
console.log(betterPrecision(124, 2));
// '120'
console.log(betterPrecision(178, 2));
// '180'
console.log(betterPrecision(17000, 1));
// '20000'
console.log(betterPrecision(17000, 2));
// '17000'
console.log(betterPrecision(17000, 3));
// '17000'
console.log(betterPrecision(389520, 4));
// '3.895e+5'
