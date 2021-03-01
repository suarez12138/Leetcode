/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let ans=[];
    dfs([],0)
    function dfs(res,index){
        if(index==s.length)ans.push(res.slice());
        for(let i=1;i+index<=s.length;i++){
            if(judge(s.substring(index,index+i))){
                res.push(s.substring(index,index+i));
                dfs(res,index+i);
                res.pop();
            }

        }
    }
    return ans;
};


function judge(str){
    for(let i=0;i<str.length>>1;i++){
        let tmp=str.substring(str.length-i-1,str.length-i);
        if(str.substring(i,i+1)!==str.substring(str.length-i-1,str.length-i))
            return false;
    }
    return true
}

console.log(partition("aab"))