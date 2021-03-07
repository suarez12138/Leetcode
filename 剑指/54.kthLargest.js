/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var kthLargest = function (root, k) {
    let arr = [], min = null, index = 0;
    dfs(root);

    function dfs(node) {
        if (!node) return;
        test(node);
        dfs(node.left);
        dfs(node.right);
    }

    function test(node) {
        if (arr.length < k) {
            arr.push(node)
            if (!min || node.val < min.val) {
                min = node;
                index = arr.length - 1;
            }
            return;
        }
        if (node.val > min.val) {
            arr[index] = node;
            min = node;
            for (let i = 0; i < arr.length; i++) {
                if (min.val > arr[i].val) {
                    min = arr[i];
                    index = i;
                }
            }
        }
    }

    return min.val;
};


console.log(kthLargest(generatetree([3, 1, 4, null, 2]), 1))

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
};


