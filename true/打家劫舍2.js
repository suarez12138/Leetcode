function rob1(arr, s, e) {
    if (e - s === 0) return 0;
    let dp = Array.from(new Array(2), () => new Array(2).fill(0));
    // dp[0][1] = arr[s];
    dp[s][1] = arr[s];
    for (let i = s + 1; i < e; i++) {
        dp[i % 2][0] = Math.max(dp[(i + 1) % 2][0], dp[(i + 1) % 2][1]);
        dp[i % 2][1] = dp[(i + 1) % 2][0] + arr[i];
    }
    return Math.max(dp[(e - 1) % 2][0], dp[(e - 1) % 2][1]);
    // return Math.max(dp[e % 2][0], dp[e % 2][1]);
}


function rob2(arr) {
    let n = arr.length;
    if (n === 1) return arr[0];
    return Math.max(rob1(arr, 0, n - 1), rob1(arr, 1, n));
}

let arr = [2, 2, 4, 3, 2, 5];
console.log(rob2(arr));

