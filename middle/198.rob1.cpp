//
// Created by 99681 on 2021/2/4.
//


#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int rob1(vector<int> &nums) {
        int n = nums.size();
        if (!n)
            return 0;
        vector<vector<int>> dp(2, {0, 0});
        dp[0][1]=nums[0];
        for (int i = 1; i < n; ++i) {
            dp[i % 2][0] = max(dp[(i + 1) % 2][0], dp[(i + 1) % 2][1]);
            dp[i % 2][1] = dp[(i + 1) % 2][0] + nums[i];
        }
        return max(dp[(n - 1) % 2][0], dp[(n - 1) % 2][1]);
    }
};

int main() {
    Solution solution;
    vector<int> nums{1,2,3,1};
    int outcome = solution.rob1(nums);
    cout << outcome << endl;
    return 0;
}

