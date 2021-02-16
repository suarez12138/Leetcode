/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let dp1 = 1, dp2 = 2;
    for (let i = 3; i < n + 1; i++) {
        if (i % 2 === 1) dp1 += dp2;
        else dp2 += dp1;
    }
    if (n % 2 === 1) return dp1;
    else return dp2;
};