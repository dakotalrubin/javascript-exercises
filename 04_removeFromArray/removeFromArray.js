const removeFromArray = function(array, ...args) {
    // Counter variable i will loop through array elements.
    for (let i = 0; i < array.length; i++) {
        // Counter variable j will loop through args elements.
        for (let j = 0; j < args.length; j++) {
            if (array[i] === args[j]) {
                array.splice(i, 1);
                i--; // Reset array index to check the new value placed there.
                break; // We don't check more args elements after removal.
            }
        }
    }
    return array;
};

module.exports = removeFromArray;