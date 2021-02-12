/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let first = second = 0;
    for (e of nums) {
        // console.log(e);
        first = ~second & (first ^ e);
        second = ~first & (second ^ e);
    }
    return first;
};

console.log(singleNumber([2,2,3,2]))