/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let n = s.length;
    s=s.split('');
    for (let i = 0; i < n; i += 2 * k) {
        if (i+k<n){
            for (let j=0;j<k>>1;j++){
                let tmp=s[i+j];
                s[i+j]=s[i+k-1-j];
                s[i+k-1-j]=tmp;
            }
        }else {
            for (let j=0;j<(n-i)>>1;j++) {
                let tmp=s[i+j];
                s[i+j]=s[n-1-j];
                s[n-1-j]=tmp;
            }
        }
    }
    return s.join('');
};


console.log(reverseStr("abcdefg",2))