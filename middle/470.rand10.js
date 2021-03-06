/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
    // return Math.floor(rand7()*10/7);
    let res = 0;
    while (res < 1 || res > 40) {
        res = rand7() + 7 * (rand7() - 1);
    }
    res %= 10;
    return res !== 0 ? res : 10;
};