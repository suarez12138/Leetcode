/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let res = numbers[0];
    for (e of numbers) {
        if (res > e) return e;
    }
    return res;
};