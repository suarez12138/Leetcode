/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n=nums.length;
    if(k>=n) k%=n;
    let tmp=new Array(k);
    let count=0;
    for(let i=n-k;i<n;i++){
        tmp[count++]=nums[i];
    }
    for(let j=n-k-1;j>=0;j--){
        nums[j+k]=nums[j];
    }
    for(let i=0;i<k;i++){
        nums[i]=tmp[i];
    }
    return nums;
};