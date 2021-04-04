let line=readline().split(' ');
let m=parseInt(line[0]),n=parseInt(line[1]);
let arr=Array.from(new Array(m),()=>new Array(n));
for (let i=0;i<n;i++){
    line=readline().split(' ');
    for (let j=0;j<m;j++){
        arr[i][j]=parseInt(line[j]);
    }
}
let dp=Array.from(new Array(m),()=>new Array(n).fill(0));
dp[0][0]=arr[0][0];
for (let i=1;i<m;i++){
    dp[0][i]=dp[0][i-1]+arr[0][i];
}
for (let i=1;i<n;i++){
    dp[i][0]=dp[i-1][0]+arr[i][0];
}
for (let i=1;i<n;i++){
    for (let j=1;j<m;j++){
        dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1])+arr[i][j];
    }
}

console.log(dp[m-1][n-1]);


