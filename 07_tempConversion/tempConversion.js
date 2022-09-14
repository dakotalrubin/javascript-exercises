const ftoc = function(num) {
    const temp = (num - 32) / 1.8;
    return Math.round(temp * 10) / 10; // Round the result to one decimal place.
};

const ctof = function(num) {
    const temp = (num * 1.8) + 32;
    return Math.round(temp * 10) / 10; // Round the result to one decimal place.
};

module.exports = {
  ftoc,
  ctof
};