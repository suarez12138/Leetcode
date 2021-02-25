/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var mergeTrees = function (root1, root2) {
    let newnode;
    if (root1 && root2) {
        newnode = new TreeNode(root1.val + root2.val);
        newnode.left = mergeTrees(root1.left, root2.left);
        newnode.right = mergeTrees(root1.right, root2.right);
    } else {
        newnode = root1 ? root1 : root2;
    }
    return newnode;
};

console.log(mergeTrees(generatetree([1, 3, 2, 5]), generatetree([2, 1, 3, null, 4, null, 7])))

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