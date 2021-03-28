/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let arr=Array.from(new Array(n),()=>(new Array(n)));
    let count=1,l=0,r=n-1,t=0,b=n-1;
    while(l<=r&&t<=b){
        for(let i=l;i<=r;i++){
            arr[t][i]=count++;
        }
        for(let i=t+1;i<=b;i++){
            arr[i][r]=count++;
        }
        if(l<r&&t<b){
            for(let i=r-1;i>=l;i--){
                arr[b][i]=count++;
            }
            for(let i=b-1;i>t;i--){
                arr[i][l]=count++;
            }
        }
        t++,b--,l++,r--;
    }
    return arr;
};

console.log(generateMatrix(3))