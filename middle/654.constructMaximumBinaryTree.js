/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {

    return build(nums)

    function build(arr) {
        let n = arr.length;
        if (!n) return null;
        if (n === 1) return new TreeNode(arr[0]);
        let max = -1, index;
        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
                index = i;
            }
        }
        let node = new TreeNode(max);
        node.left = build(arr.slice(0, index));
        node.right = build(arr.slice(index + 1));
        return node;
    }
};