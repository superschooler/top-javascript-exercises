const repeatString = function (string, num) {
  if (num < 0 || isNaN(num)) {
    return "ERROR";
  }

  let finalString = "";
  for (let i = 0; i < num; i++) {
    finalString += string;
  }
  return finalString;
};

module.exports = repeatString;
