//
// Created by 99681 on 2021/2/4.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int maxProfit4(int k, vector<int> &prices) {
        int n = prices.size();
        if (n == 0 || k == 0)return 0;
        vector<vector<int>> dp(k, {0, -prices[0]});
        for (int i = 1; i < n; ++i) {
            for (int j = k - 1; j > 0; --j) {
                dp[j][0] = max(dp[j][0], dp[j][1] + prices[i]);
                dp[j][1] = max(dp[j][1], dp[j - 1][0] - prices[i]);
            }
            dp[0][0] = max(dp[0][0], dp[0][1] + prices[i]);
            dp[0][1] = max(dp[0][1], -prices[i]);
        }
        return dp[k - 1][0];
    }
};

int main() {
    Solution solution;
    vector<int> nums{3, 2, 6, 5, 0, 3};
    int outcome = solution.maxProfit4(2, nums);
    cout << outcome << endl;
    return 0;
}

