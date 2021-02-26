/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {
    var m = dep(root)
    var res = Array.from(new Array(m), () => new Array(Math.pow(2, m) - 1).fill(""))
    go(root, 0, (Math.pow(2, m) - 1) / 2 | 0, (Math.pow(2, m) - 1) / 4 | 0)
    return res


    function dep(root) {
        if (!root) return 0
        let left = dep(root.left)
        let right = dep(root.right)
        return Math.max(left, right) + 1
    }

    function go(root, i, j, len) {
        res[i][j] = root.val + ''
        if (root.left)
            go(root.left, i + 1, j - len - 1, len / 2 | 0)
        if (root.right)
            go(root.right, i + 1, j + len + 1, len / 2 | 0)
    }
};