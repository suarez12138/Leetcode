/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let ans = [];
    let n = s.length;
    for (let i = 1; i < 4 && i < n - 2; i++) {
        for (let j = i+1; j < 7 && j < n - 1 && j > i; j++) {
            for (let k = j+1; k < 10 && k < n && k > j; k++) {
                if (!check(s.substring(0, i)) || !check(s.substring(i, j)) || !check(s.substring(j, k)) || !check(s.substring(k))) {
                    continue;
                }
                ans.push(s.substring(0, i) + '.' + s.substring(i, j) + '.' + s.substring(j, k) + '.' + s.substring(k));
            }
        }
    }
    return ans;
};

function check(str) {
    if (str.substring(0, 1) == '0' && str.length!==1) return false;
    if (parseInt(str) < 0 || parseInt(str) > 255) return false;
    return true;
}


console.log(restoreIpAddresses('25525511135'));