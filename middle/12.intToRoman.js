/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let ans = "";
    for (let i = 0; i < 4; i++) {
        if (!num) break;
        let k = num % 10;
        num = Math.floor(num / 10);
        let ochar = '', fchar = '', tchar = '';
        if (i === 0) {
            ochar = 'I';
            fchar = 'V';
            tchar = 'X';
        } else if (i === 1) {
            ochar = 'X';
            fchar = 'L';
            tchar = 'C';
        } else if (i === 2) {
            ochar = 'C';
            fchar = 'D';
            tchar = 'M';
        } else {
            ochar = 'M';
        }
        switch (k) {
            case 1:
                ans = ochar + ans;
                break;
            case 2:
                ans = ochar + ochar + ans;
                break;
            case 3:
                ans = ochar + ochar + ochar + ans;
                break;
            case 4:
                ans = ochar + fchar + ans;
                break;
            case 5:
                ans = fchar + ans;
                break;
            case 6:
                ans = fchar + ochar + ans;
                break;
            case 7:
                ans = fchar + ochar + ochar + ans;
                break;
            case 8:
                ans = fchar + ochar + ochar + ochar + ans;
                break;
            case 9:
                ans = ochar + tchar + ans;
                break;
        }
    }
    return ans;
};