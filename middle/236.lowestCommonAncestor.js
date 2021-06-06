/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 传入数组版
// var lowestCommonAncestor = function(root, p, q) {
//     let list=[];
//     let s=-1,l=-1;
//     for(let i=0;i<root.length;i++){
//         if(root[i]===p||root[i]===q){
//             if(s===-1)
//                 s=i+1;
//             else{
//                 l=i+1;
//                 break;
//             }
//         }
//     }
//
//     while (l>s){
//         let t1=l>>1;
//         let t2=s>>1;
//         if(t1===t2||t1===s)
//             return root[t1-1];
//         l=t1;
//     }
//     return root[(s>>1)-1];
// };
//
// console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4],1,0))

var lowestCommonAncestor = function(root, p, q) {
    let ans;
    const dfs = (root, p, q) => {
        if (root === null) return false;
        const lson = dfs(root.left, p, q);
        const rson = dfs(root.right, p, q);
        if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
            ans = root;
        }
        return lson || rson || (root.val === p.val || root.val === q.val);
    }
    dfs(root, p, q);
    return ans;
};

