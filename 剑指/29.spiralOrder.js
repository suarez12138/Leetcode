/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let ans = [];
    let m = matrix.length;
    if (m === 0) return ans;
    let n = matrix[0].length;
    let l = 0, r = n, t = 0, b = m;

    while (l < r && t < b) {
        for (let i = l; i < r; i++) {
            ans.push(matrix[t][i]);
        }
        for (let i = t+1; i < b; i++) {
            ans.push(matrix[i][r - 1]);
        }
        if (l < r - 1 && t < b - 1) {
            for (let i = r - 2; i >= l; i--) {
                ans.push(matrix[b - 1][i]);
            }
            for (let i = b - 2; i > t; i--) {
                ans.push(matrix[i][l]);
            }
        }
        [l,r,t,b]=[l+1,r-1,t+1,b-1];
    }
    return ans;
};
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
console.log(spiralOrder([[1, 2], [5, 6], [9, 10]]));
