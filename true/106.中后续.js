/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!inorder.length)return null;
    for(let i=0;i<inorder.length;i++){
        if(inorder[i]===postorder[postorder.length-1]){
            let node=new TreeNode(postorder.pop());
            node.right=buildTree(inorder.slice(i+1),postorder);
            node.left=buildTree(inorder.slice(0,i),postorder);
            return node;
        }
    }
};