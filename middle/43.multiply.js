/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var multiply = function (num1, num2) {
//     if (!num1||!num2)return 0;
//     let s1 = num1.length, s2 = num2.length;
//     let ans = [], carry = 0;
//     for (let i = s1 - 1; i >= 0; i--) {
//         carry = 0;
//         let str = [];
//         for (let k = 0; k < s1 - 1 - i; k++) {
//             str.unshift(0);
//         }
//         for (let j = s2 - 1; j >= 0; j--) {
//             let sum = (num1.charAt(i) - '0') * (num2.charAt(j) - '0') + carry;
//             str.unshift(sum % 10);
//             carry = Math.floor(sum / 10);
//         }
//         if (carry) str.unshift(carry);
//         ans.push(str.join(""));
//     }
//     let res = ans[0];
//
//     for (let i = 1; i < ans.length; i++) {
//         res = add(res, ans[i]);
//     }
//
//     return res;
// };
//
// function add(s1, s2) {
//     let n1 = s1.length - 1, n2 = s2.length - 1, car = 0;
//     let res = [];
//     while (n1 >= 0 || n2 >= 0 || car) {
//         let t1 = n1 >= 0 ? s1.charAt(n1--) - '0' : 0;
//         let t2 = n2 >= 0 ? s2.charAt(n2--) - '0' : 0;
//         let sum = t1 + t2 + car;
//         res.unshift(sum % 10);
//         car = Math.floor(sum / 10);
//     }
//
//     return res.join("");
// }



var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0'
    }
    let stk = new Array(num1.length + num2.length).fill(0)
    for(let i = num1.length; i--;){
        for(let j = num2.length; j--;){
            let tmp = num1[i] * num2[j] + stk[i + j + 1];
            stk[i + j + 1] = tmp % 10;
            stk[i + j] += 0 | tmp / 10;
        }
    }
    while(stk[0] === 0) {
        stk.shift();
    }
    return stk.join('');
};

console.log(multiply('123', '456'))
