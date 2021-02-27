/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var permute = function (nums) {
    let ans = [];
    backtrack(nums, 0, nums.length);

    function backtrack(frame, first, len) {
        if (first === len) {
            ans.push(frame.slice());
            return;
        }
        for (let i=first;i<len;i++){
            [frame[i],frame[first]]=[frame[first],frame[i]];
            backtrack(frame,first+1,len);
            [frame[i],frame[first]]=[frame[first],frame[i]];
        }
    }
    return ans;
}


// var permute = function (nums) {
//     let n = nums.length;
//     let ans = [nums];
//     for (let i = 1; i < n; i++) {
//         let tmp = nums.slice();
//         for (let k = 0; k < n - i; k++) {
//             for (let j = 0; j + i < n; j++) {
//                 [tmp[j],tmp[j+i]]=[tmp[j+i],tmp[j]];
//                 ans.push(tmp.slice());
//             }
//         }
//     }
//     return ans;
// };

console.log(permute([1, 2, 3]));