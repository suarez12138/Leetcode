/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let ans=[];
    for(let i=0;i<digits.length;i++){
        let arr=choice(digits[i]);
        let n=ans.length;
        if (n===0){
            ans=arr;
        }else{
            for(let j=0;j<n;j++){
                for(let k=0;k<arr.length;k++){
                    ans.push(ans[j]+arr[k]);
                }
            }
            for(let j=0;j<n;j++){
                ans.shift();
            }
        }
    }
    return ans;
};


function choice(di){
    switch(di){
        case '2':
            return ['a','b','c'];
        case '3':
            return ['d','e','f'];
        case '4':
            return ['g','h','i'];
        case '5':
            return ['j','k','l'];
        case '6':
            return ['m','n','o'];
        case '7':
            return ['p','q','r','s'];
        case '8':
            return ['t','u','v'];
        case '9':
            return ['w','x','y','z'];
    }
}