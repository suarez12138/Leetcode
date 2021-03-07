/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let arr = [], min = null, index = 0;
    for(let i=0;i<nums.length;i++){
        if (arr.length < k) {
            arr.push(nums[i]);
            if (min===null || nums[i] <min) {
                min = nums[i];
                index = arr.length - 1;
            }
            continue;
        }
        if (nums[i] > min) {
            arr[index] = nums[i];
            min = nums[i];
            for (let i = 0; i < arr.length; i++) {
                if (min > arr[i]) {
                    min = arr[i];
                    index = i;
                }
            }
        }
    }
    return min;
};


console.log(findKthLargest([0,1,2,3,4],5))