/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n=nums.length;
    let arr=new Array(n).fill(n+2);
    arr[n-1]=0;
    for(let i=n-2;i>=0;i--){
        if(i-1>=0&&nums[i-1]-1>=nums[i])
            continue;
        for(let j=i+1;j-i<=nums[i]&&j<n;j++){
            arr[i]=Math.min(arr[j]+1,arr[i]);
        }
    }
    return arr[0];
};

//  O(n)
// var jump = function(nums) {
//     let length = nums.length;
//     let end = 0;
//     let maxPosition = 0;
//     let steps = 0;
//     for (let i = 0; i < length - 1; i++) {
//         maxPosition = Math.max(maxPosition, i + nums[i]);
//         if (i == end) {
//             end = maxPosition;
//             steps++;
//         }
//     }
//     return steps;
// }
//


console.log(jump([2,3,1,1,4]));