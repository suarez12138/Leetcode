// 获取一个字母数组混合的字符串中最大的数字

console.log(solution("kd32kjl23234kk055e"))

function solution(str) {
    let arr=str.split(/[(a-z)|(A-Z)]+/g).map((e)=>Number(e));
    let max=arr[0];
    for (let i=1;i<arr.length;i++){
        max=max<arr[i]?arr[i]:max;
    }
    return max;
}