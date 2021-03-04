/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let n1 = num1.length - 1, n2 = num2.length - 1;
    let car = 0, res = "";
    while (n1 >= 0 || n2 >= 0) {
        let tmp1 = 0, tmp2 = 0;
        if (n1 >= 0) tmp1 = parseInt(num1.charAt(n1--));
        if (n2 >= 0) tmp2 = parseInt(num2.charAt(n2--));
        let ans = car + tmp1 + tmp2;
        res += (ans % 10);
        car = Math.floor(ans / 10);
    }
    if (car) res += car;
    res = res.split("").reverse().join("");
    return res;
};

console.log(addStrings("1", "9"))