/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let ans = 0;

    s = s.replace("IV", "A");
    s = s.replace("IX", "B");
    s = s.replace("XL", "K");
    s = s.replace("XC", "G");
    s = s.replace("CD", "E");
    s = s.replace("CM", "F");

    for (let i = s.length - 1; i >= 0; i--) {
        ans += sub(s.charAt(i));
    }
    return ans;
};


function sub(char) {
    switch (char) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        case 'A':
            return 4;
        case 'B':
            return 9;
        case 'K':
            return 40;
        case 'G':
            return 90;
        case 'E':
            return 400;
        case 'F':
            return 900;
    }
}