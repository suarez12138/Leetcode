var 1 = function (nums, target) {
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashMap[target - nums[i]] !== void 0) {
            return [hashMap[target - nums[i]], i];
        } else {
            hashMap[nums[i]] = i;
        }
    }
};

console.log(1([2,7,11,15],9))