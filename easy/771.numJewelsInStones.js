/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let s = new Set(), res = 0;
    for (let i = 0; i < jewels.length; i++) {
        s.add(jewels.charAt(i));
    }
    for (let i = 0; i < stones.length; i++) {
        if (s.has(stones.charAt(i))) {
            res++;
        }
    }
    return res;
};