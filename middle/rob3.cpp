//
// Created by 99681 on 2021/2/4.
//


#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;


struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;

    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};


class Solution {
public:
    struct status {
        int select;
        int unselect;
    };

    int rob3(TreeNode *root) {
        status result = dfs(root);
        return max(result.select, result.unselect);
    }


    status dfs(TreeNode *node) {
        if (!node) return {0, 0};
        status leftS = dfs(node->left);
        status rightS = dfs(node->right);
        int select = node->val + leftS.unselect + rightS.unselect;
        int unselect = max(leftS.unselect,leftS.select) + max(rightS.unselect,rightS.select);
        return {select,unselect};
    }
};

//int main() {
//    Solution solution;
//    vector<int> nums{1, 2, 3, 1};
//    int outcome = solution.rob3(nums);
//    cout << outcome << endl;
//    return 0;
//}

