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
var levelOrderBottom = function (root) {
    let ans = [];
    let count = 0;
    dfs(root, count);

    function dfs(node, count) {
        if (!node) return;
        if (++count > ans.length) ans.unshift([]);
        ans[ans.length - count].push(node.val);
        dfs(node.left, count);
        dfs(node.right, count);
    }

    return ans;
};