/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    //位运算版 研究一下
    const ans = [];
    const n = nums.length;
    console.log(1 << n);
    for (let mask = 0; mask < (1 << n); ++mask) {
        const t = [];
        for (let i = 0; i < n; ++i) {
            console.log(1 << i);
            if (mask & (1 << i)) {
                t.push(nums[i]);
            }
        }
        ans.push(t);
    }
    return ans;

    // 速度超94%
    // let ans = [[]], n = nums.length;
    // for (let i = 0; i < n; i++) {
    //     tmp = nums[i];
    //     // ans.push([tmp]);
    //     let end = ans.length;
    //     for (let j = 0; j < end; j++) {
    //         let tp = [];
    //         for (let k = 0; k < ans[j].length; k++)
    //             tp.push(ans[j][k]);
    //         tp.push(tmp);
    //         ans.push(tp);
    //     }
    // }
    // return ans;
};


console.log(subsets([1, 2, 3]))