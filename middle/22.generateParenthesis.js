/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans=[];
    let backtrack=(current,l,r)=>{
        if(current.length===n*2){
            ans.push(current);
            return;
        }
        if(l<n){
            backtrack(current+'(',l+1,r);
        }
        if(r<l){
            backtrack(current+')',l,r+1);
        }
    }
    backtrack("",0,0)
    return ans;
};

