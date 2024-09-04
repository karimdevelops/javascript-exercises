const removeFromArray = function (list, ...removeValues) {
  let removeArray = list.filter((value) => {
    for (removeValue of removeValues) {
      if (value === removeValue) {
        return false;
      }
    }
    return true;
  });
  return removeArray;
};

// Do not edit below this line
module.exports = removeFromArray;
