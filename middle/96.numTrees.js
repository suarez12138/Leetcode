/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let dp = Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        let ans=0;
        for (let j = 0; j <= i - 1; j++) {
            ans += dp[j] * dp[i - 1 - j];
        }
        dp[i] = ans;
    }
    return dp[n];
};

console.log(numTrees(3))
console.log(numTrees(2))
console.log(numTrees(4))