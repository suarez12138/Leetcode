/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let n = nums.length, ans = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;
            let l = j + 1, r = n - 1;
            while (l < r) {
                let tmp = nums[i] + nums[j] + nums[l] + nums[r];
                if (tmp == target) {
                    ans.push([nums[i], nums[j], nums[l], nums[r]]);
                    while (nums[l + 1] == nums[l]) l++;
                    while (nums[r - 1] == nums[r]) r--;
                    l++;
                    r--;

                } else if (tmp < target) {
                    l++;
                } else {
                    r--;
                }
            }
        }
    }
    return ans;
};


console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
console.log(fourSum([-1, -1, -1, 0, 0, 0, 1, 1, 1, 1], 0))


//深复制 浅复制
// const a1=[1,2,3,4];
// const a2=Array.from(a1);
// const a3=a1;
// console.log(a1==a2);
// console.log(a1==a3);
// console.log(a1===a2);
// console.log(a1===a3);
// a1[0]=0;
// console.log(a2);
// console.log(a3);
//
//
//
// var obj = { a:1, arr: [2,3] };
// var shallowObj = shallowCopy(obj);
//
// function shallowCopy(src) {
//     var dst = {};
//     for (var prop in src) {
//         if (src.hasOwnProperty(prop)) {
//             dst[prop] = src[prop];
//         }
//     }
//     return dst;
// }
// console.log(obj.a==shallowObj.a);
// console.log(obj.a===shallowObj.a);
// console.log(obj.arr==shallowObj.arr);
// console.log(obj.arr===shallowObj.arr);

