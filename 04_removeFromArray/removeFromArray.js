const removeFromArray = function (list, removeValue) {
  let removeArray = list.filter((value) => value != removeValue);
  return removeArray;
};

// Do not edit below this line
module.exports = removeFromArray;
