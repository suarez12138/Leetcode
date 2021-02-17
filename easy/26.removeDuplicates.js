/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let n = nums.length;
    if (n === 0) return 0;
    let i = 0;
    for (let j = 1; j < n; j++) {
        if (nums[i] !== nums[j]) {
            nums[++i] = nums[j];
        }
    }
    return i + 1;


    // let n = nums.length;
    // if (n === 0) return 0;
    // let pre = nums[0], fast = 1, ans = 0;
    // // if (n > 1 && nums[0] === nums[1])
    // //     ans++;
    // for (let i = 1; i < n; i++) {
    //     if (nums[i] <= pre) {
    //         while (fast < n && nums[fast] === nums[fast - 1]) {
    //             fast++;
    //         }
    //         nums[i] = nums[fast];
    //         fast++;
    //     }
    //     pre = nums[i];
    //     if (fast >= n - 1) {
    //         ans += i;
    //         break;
    //     }
    // }
    //
    // return ans;
};

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([1, 2, 2]))
console.log(removeDuplicates([1, 1]))
console.log(removeDuplicates([1, 2]))
console.log(removeDuplicates([1, 2, 3, 4, 5]))
console.log(removeDuplicates([1, 2, 3, 3, 4, 5]))
console.log(removeDuplicates([1, 2, 3, 4, 5, 5]))