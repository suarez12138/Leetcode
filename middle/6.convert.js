var convert = function (s, numRows) {
    if (numRows===1)return s;
    let res = "";
    for (let i = 0; i < numRows; i++) {
        let j = i;
        let count = 0;
        while (j < s.length) {
            res += s.charAt(j);
            if (i !== numRows-1 && (count % 2 === 0 || i === 0)) {
                j += 2 * (numRows - i) - 2;
            } else {
                j += 2 * i ;
            }
            count++;
        }
    }
    return res;
};

console.log(convert("abc", 2))