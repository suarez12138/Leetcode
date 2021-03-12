/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let tmp="",n=s.length;
    for(let i=0;i<n>>1;i++){
        let tmp=s[i];
        s[i]=s[n-1-i];
        s[n-1-i]=tmp;
    }
    return s;
};