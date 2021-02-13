/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map=new Map();
    for (let i=0;i<nums.length;i++){
        if (map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }else {
            map.set(nums[i],1);
        }
    }
    for (let [k,v] of map.entries()){
        if (v>nums.length/2){
            return k;
        }
    }
};

console.log(majorityElement([2,2,1,1,1,2,2]))