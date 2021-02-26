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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root)return null;
    function preorder(node){
        if(node.left&&node.right){
            let mark=node.left;
            while(mark.right){
                mark=mark.right;
            }
            mark.right=node.right;
            node.right=node.left;
            node.left=null;
        }else if(node.left){
            node.right=node.left;
            node.left=null;
        }
        if(node.right)
            preorder(node.right);
    }

    preorder(root);
    return root;
};