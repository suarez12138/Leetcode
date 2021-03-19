/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let n1=text1.length,n2=text2.length,max=0;
    let dp=Array.from(new Array(n1+1),()=>new Array(n2+1).fill(0))
    for(let i=1;i<n1+1;i++){
        for(let j=1;j<n2+1;j++){
            if(text1[i-1]===text2[j-1]){
                dp[i][j]=dp[i-1][j-1]+1;
                max=Math.max(dp[i][j],max);
            }else{
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
            }

        }
    }
    return max;
};

console.log(longestCommonSubsequence("abcba","abcbcba"))