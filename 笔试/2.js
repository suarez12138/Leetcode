/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 你需要返回一个指针，指向root，表示删减去若干个点后，剩下的树
 * @param root TreeNode类 指向二叉树的根
 * @return TreeNode类
 */
function solve( root ) {
    // write code here
    let node=root;
    let mini=100000;
    dfs(root,0);
    return mini;
    dfs2(root,1)

    function dfs(node,h){
        if (!node)return h;
        mini=Math.min(dfs(node.left,h+1),mini);
        mini=Math.min(dfs(node.right,h+1),mini);
        return mini;
    }

    function dfs2(node,h){
        if (mini===h){
            node.left=null;
            node.right=null;
        }
        if (node.left)dfs2(node.left,h+1);
        if (node.right)dfs2(node.right,h+1);
    }

    return root;
}
module.exports = {
    solve : solve
};