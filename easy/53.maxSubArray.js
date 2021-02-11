var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;



    // let n=nums.length,ans=nums[0],tmp=nums[0],l=0,r=1;
    // while(r<n){
    //     tmp+=nums[r];
    //     if(tmp<0){
    //         if(nums[r]<0)l=++r;
    //         else l=r;
    //         tmp=nums[l];
    //     }
    //     ans=Math.max(ans,tmp);
    //
    //     r++;
    // }
    // return ans;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))