/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let n=gas.length,i=0;
    while(i<n){
        let tmpG=0;
        let j=i,count=0;
        while(count<n){
            tmpG+=(gas[(i+count)%n]-cost[(i+count)%n]);
            if(tmpG<0) break;
            count++;
        }
        if(tmpG>=0)return i;
        i+=count+1;
    }
    return -1;
};

console.log(canCompleteCircuit([1,2,3,4,5]
    ,[3,4,5,1,2]))
