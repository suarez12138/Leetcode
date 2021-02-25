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
 * @return {number}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var maxDepth = function (root) {
    let res = 0;

    function dfs(node, count) {
        if (!node) {
            res = Math.max(count, res);
            return;
        }
        count++;
        console.log(node.val);
        dfs(node.left, count);
        dfs(node.right, count);
    }

    dfs(root, 0);
    return res;
};


function generatetree(arr) {
    if (arr.length == 0) return null;
    let root = new TreeNode(arr.shift());
    let stack = [];
    let node = root;
    while (arr.length) {
        if (arr[0] == null) arr.shift();
        else {
            let l = new TreeNode(arr.shift());
            node.left = l;
            stack.push(l);
        }
        if (arr.length) {
            if (arr[0] == null) arr.shift();
            else {
                let r = new TreeNode(arr.shift());
                node.right = r;
                stack.push(r);
            }
        }
        node = stack.shift();
    }
    return root;
}


console.log(maxDepth(generatetree([3, 9, 20, null, null, 15, 7])));