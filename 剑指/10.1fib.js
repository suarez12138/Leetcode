/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) return 0;
    let dp0 = 0, dp1 = 1;
    for (let i = 2; i < n + 1; i++) {
        [dp0, dp1] = [dp1, (dp0 + dp1) % 1000000007]
        // dp[i]=(dp[i-1]+dp[i-2])%1000000007;
    }
    return dp1;
};