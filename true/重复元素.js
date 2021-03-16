// [1,2,3,2,1,1,1,1]
// 编写函数getRepeatElements获取其中的重复元素，[1,2]

function getRepeatElements(arr) {
    let s = {}, n = arr.length;
    let res = [];
    for (k of arr) {
        if(s[k]===1){
            res.push(k);
            s[k]++;
        }else if(s[k]!==2){
            s[k]=1;
        }
    }
    res.sort((a,b)=>a-b);

    return res;
}


console.log(getRepeatElements([1,2,3,2,1,1,1,1]));