var reverse = function (x) {
    let ans = 0;
    while (x) {
        ans *= 10;
        ans += x % 10;
        x = (x / 10) | 0;
    }
    return (ans | 0) === ans ? ans : 0;
};

console.log(reverse(1534236469))