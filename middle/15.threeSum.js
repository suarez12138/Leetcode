var threeSum = function (nums) {
    let n = nums.length, ans = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] > 0) break;
        let l = i + 1, r = n - 1;
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        while (l < r) {
            let tmp = nums[i] + nums[l] + nums[r];
            if (tmp === 0) {
                ans.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] == nums[l + 1]) l++;
                while (l < r && nums[r] == nums[r - 1]) r--;
                l++;
                r--;
            } else if (tmp > 0) {
                r--;
            } else l++;
        }
    }
    return ans;
};

console.log(threeSum([]))
console.log(threeSum([0]))
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([-1, -1, 0, 0, 1, 1]))
console.log(threeSum([-1, -1, -1, 0, 0, 0, 1, 1, 1]))
console.log(threeSum([-2, -2, -2, -1, -1, -1, 1, 1, 1, 2, 2, 2]))
