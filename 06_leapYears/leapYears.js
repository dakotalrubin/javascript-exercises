const leapYears = function(year) {
    if (year % 4 == 0 && year % 100 != 0) {
    // Includes all leap years that don't involve multiples of 100
        return true;
    } else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
        // Includes all leap years involving multiples of 100 that still count
        return true;
    } else {
        // Excludes all other years
        return false;
    }
};

module.exports = leapYears;