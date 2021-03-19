/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
            let mid = ((r - l) >> 1 )+ l;
        if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else return mid;
    }
    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12],9))