/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let res=0,count=1;
    let high=Math.floor(n/10),cur=n%10,low=0;
    while(high||cur){
        if(cur===0)
            res+=high*count;
        else if (cur===1)
            res+=high*count+low+1;
        else
            res+=(high+1)*count;
        low+=count*cur;
        cur=high%10;
        high=Math.floor(high/10);
        count*=10;
    }
    return res;
};