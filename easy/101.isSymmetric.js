/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function (root) {
    function dfs(n1, n2) {
        if (!n1 && !n2) return true;
        if (!n1 || !n2) return false;
        return n1.val === n2.val && dfs(n1.left, n2.right) && dfs(n1.right, n2.left);
    }

    return dfs(root, root);
};

// var isSymmetric = function(root) {
//     let arr=[];
//     function dfs(node){
//         if(node){
//             dfs(node.left);
//             arr.push(node.val);
//             dfs(node.right);
//         }
//     }
//     dfs(root);
//     for(let i=0;i<arr.length>>1;i++){
//         if(arr[i]!==arr[arr.length-1-i])return false;
//     }
//     return true;
// };