/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var generateTrees = function (n) {
    let map = new Map();

    function subpro(s, e) {
        let ans = [];
        if (s > e) return [null];
        if (map.has(s + '-' + e)) return map.get(s + '-' + e);
        for (let i = s; i <= e; i++) {
            let l = subpro(s, i - 1);
            let r = subpro(i + 1, e);
            for (const lnode of l) {
                for (const rnode of r) {
                    let node = new TreeNode(i);
                    node.left = lnode;
                    node.right = rnode;
                    ans.push(node);
                }
            }
        }
        map.set(s + '-' + e, ans);
        return ans;
    }

    if (n == 0) {
        return [];
    } else return subpro(1, n)
};


console.log(generateTrees(3));