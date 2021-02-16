/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let commen = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let count = commen.length;
        while (count > strs[i].length || commen.substring(0, count) !== strs[i].substring(0, count))
            count--;
        commen = commen.substring(0, count);
        if (commen == "") {
            break;
        }
    }
    return commen;
};