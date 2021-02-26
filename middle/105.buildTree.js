/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var buildTree = function (preorder, inorder) {
    if (!inorder.length) return null;
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === preorder[0]) {
            let node = new TreeNode(preorder.shift());
            node.left = buildTree(preorder, inorder.slice(0, i));
            node.right = buildTree(preorder, inorder.slice(i + 1));
            return node;
        }
    }
};

console.log(buildTree([3, 9, 12, 13, 20, 15, 7], [12, 9, 13, 3, 15, 20, 7]))

