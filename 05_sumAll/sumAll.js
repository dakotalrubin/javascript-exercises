const sumAll = function(num1, num2) {
    let sum = 0;

    // Return "ERROR" for non-numeric or negative arguments.
    if (!Number.isInteger(num1) || !Number.isInteger(num2) ||
        num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    // If larger number first, create temp variable to swap argument order.
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    for (num1; num1 <= num2; num1++) {
        sum += num1;
    }

    return sum;
};

module.exports = sumAll;