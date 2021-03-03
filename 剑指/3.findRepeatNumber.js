/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let arr=new Array(100000).fill(0);
    // let test={};
    // test[1]='9';
    // test[2]='8';
    for(e of nums){
        // console.log(e);
        if(arr[e]) return e;
        else arr[e]++;
    }
    // console.log("---")
    // for (e in test){
    //     console.log(e);
    // }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))