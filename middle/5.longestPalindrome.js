var longestPalindrome = function (s) {
    let n = s.length;
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = [];
        for (let r = 0; r < n; r++) {
            if (i === r) {
                dp[i][i] = 1;
            } else
                dp[i][r] = 0;
        }
    }
    let max = 1, point = 0;

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s.charAt(i) == s.charAt(j) && (dp[i + 1][j - 1] !== 0 || i + 1 === j)) {
                dp[i][j] = 2 + dp[i + 1][j - 1];
                if (max < dp[i][j]) {
                    max = dp[i][j];
                    point = i;
                }
            }
        }
    }

    return s.substr(point, max);
};


console.log(longestPalindrome("babad"))


