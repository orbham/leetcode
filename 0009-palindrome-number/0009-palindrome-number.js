/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    let reversed = 0;
    let copy = x;

    while (copy > 0) {
        const number = copy % 10;
        reversed = reversed * 10 + number;
        copy = ~~(copy / 10);
    }
    return reversed == x;
};