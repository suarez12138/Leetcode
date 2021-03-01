

var addBinary = function(a, b) {
    let ans = "";
    let carry = 0;
    for(let i = a.length - 1, j = b.length - 1;i >= 0 || j >= 0; i--, j--) {
        let sum = carry;
        sum += i >= 0 ? parseInt(a[i]) : 0;
        sum += j >= 0 ? parseInt(b[j]) : 0;
        ans += sum % 2;
        carry = sum >>1;
    }
    ans += carry == 1 ? carry : "";
    // let tmp=ans.split('');
    return ans.split('').reverse().join('');
};


console.log(addBinary("1011","1011"))