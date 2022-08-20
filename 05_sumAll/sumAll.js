const sumAll = function (a, b) {
  // Both parameters must be positive integers
  if (typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0) {
    return "ERROR";
  } else {
    let sum = 0;
    // Checks if a is less than b to increment properly and avoid an infinite loop
    if (a < b) {
      for (let i = a; i <= b; i++) {
        sum += i;
      }
    } else {
      for (let i = b; i <= a; i++) {
        sum += i;
      }
    }
    return sum;
  }
};

module.exports = sumAll;
