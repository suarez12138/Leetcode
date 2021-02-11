var isPalindrome = function (x) {
    let tmp = x.toString();
    for (let i = 0; i < (tmp.length >> 1); i++) {
        if (tmp.charAt(i) != tmp.charAt(tmp.length - 1 - i)) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(12231))