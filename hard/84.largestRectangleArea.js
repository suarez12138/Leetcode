/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let n = heights.length;
    let tmp = [], ans = 0;
    for (let i = 0; i < n; i++) {
        if (tmp.length !== 0 && tmp[tmp.length - 1][1] > heights[i]) {
            for (let j = tmp.length - 1; j >= 0 && tmp[j][1] > heights[i]; j--) {
                tmp[j][1] = heights[i];
                if (j + 1 < tmp.length) {
                    tmp.pop();
                }
            }
        } else if (tmp.length == 0 || tmp[tmp.length - 1][1] < heights[i]) {
            tmp.push([i, heights[i]]);
        }
        for (let j = 0; j < tmp.length; j++) {
            let area = tmp[j][1] * (i + 1 - tmp[j][0]);
            if (area > ans) ans = area;
        }
    }
    return ans;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))//10
console.log(largestRectangleArea([2, 1, 5, 6, 7, 2, 3]))//15
console.log(largestRectangleArea([2, 1, 5, 6, 5, 7, 2, 3]))//20
console.log(largestRectangleArea([2, 1, 5, 6, 2, 7, 2, 3]))//12
console.log(largestRectangleArea([5, 4, 1, 2]))//8
