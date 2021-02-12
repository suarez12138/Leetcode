/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let n = nums.length, ans = nums[0]+nums[1]+nums[2],abs=Math.abs(ans-target);
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n - 1; i++) {
        let l = i + 1, r = n - 1;
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        while (l < r) {
            let tmp = nums[i] + nums[l] + nums[r];
            if(Math.abs(tmp-target)<abs){
                abs=Math.abs(tmp-target);
                ans=tmp;
            }

            if (tmp > target) {
                r--;
            } else l++;
        }
    }
    return ans;
};