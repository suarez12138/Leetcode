/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n=height.length,l=0,ans=0;
    for (let i=0;i<n;i++){
        if (height[i]!=0){
            l=i;
            break;
        }
    }
    let r=l+1;
    while (r<n){
        if (height[r]<height[l]){
            ans+=height[l]-height[r];
        }else {
            l=r;
        }
        r++
    }
    r=n-1;
    for (let i=n-1;i>l;i--){
        if (height[r]<height[i]){
            r=i;
        }else {
            ans+=height[r]-height[i];
        }
        ans-=height[l]-height[i];
    }
    return ans;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4,2,0,3,2,5]))