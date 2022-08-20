// Create a function to remove any number of arguments from an array
const removeFromArray = function (arr) {
  // Create loop that starts at index 1 to skip the array, then loops through any and all entered arguments
  for (let i = 1; i < arguments.length; i++) {
    // Check each element of the array and compare with arguments[i]. If it's equivalent to the argument, remove the index of that element from the array with splice
    arr.forEach((element, index) => {
      if (element === arguments[i]) {
        arr.splice(index, 1);
      }
    });
  }

  // Return the modified array
  return arr;
};

module.exports = removeFromArray;
