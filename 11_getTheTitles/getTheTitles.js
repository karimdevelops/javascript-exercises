const getTheTitles = function (arr) {
  return arr.reduce((accumulator, object) => {
    accumulator.push(object.title);
    return accumulator;
  }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
