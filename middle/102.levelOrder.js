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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let ans = [];
    bfs(root, 0)

    function bfs(node, count) {
        if (!node) return;
        if (!ans[count]) ans[count] = [node.val];
        else ans[count].push(node.val);
        bfs(node.left, ++count);
        bfs(node.right, count);
    }

    return ans;
};