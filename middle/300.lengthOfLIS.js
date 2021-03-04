/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let n=nums.length,res=1;
    let dp=Array (n).fill(1);
    label:
        for(let i =0;i<n;i++){
            for(let j=i-1;j>=0;j--){
                if(nums[i]>nums[j]){
                    dp[i]=Math.max(dp[i],dp[j]+1);
                    res=Math.max(res,dp[i]);
                }
            }
        }
    return res;
};