/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let count = 0;
    recursion(0,0);
    function recursion(l, r) {
        if (l === n && r === n) {
            count++;
            return;
        }
        if (l < n) {
            recursion(l + 1, r);
        }
        if (r < l) {
            recursion(l, r + 1);
        }
    }
    return count;
};

console.log(generateParenthesis(8))
