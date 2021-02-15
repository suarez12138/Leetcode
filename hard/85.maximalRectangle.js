/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    let ans = 0;
    if (!matrix.length) return 0;
    let point = Array(matrix[0].length);
    point.fill(0);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 1)
                point[j] += 1;
            else
                point[j] = 0;
        }
        tmp = largestRectangleArea(point);
        ans = Math.max(ans, tmp);
    }
    return ans;
};

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

console.log(maximalRectangle([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]));
console.log(maximalRectangle([]));
console.log(maximalRectangle(["1"]));
console.log(maximalRectangle(["0"]));
console.log(maximalRectangle(["0","0"]));

