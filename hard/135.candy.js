/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let res = 1, last = 1, count = 0, mark = 1;
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] >= ratings[i - 1]) {
            if (ratings[i] === ratings[i - 1]) last = 1;
            else last++;
            res += last;
            count = 0;
            mark = last;
        } else if (ratings[i] < ratings[i - 1]) {
            count++;
            if (count === mark) count++;
            res += count;
            last = 1;
        }
    }
    return res;
};