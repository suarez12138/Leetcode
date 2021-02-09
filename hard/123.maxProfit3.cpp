//
// Created by 99681 on 2021/2/3.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int maxProfit3(vector<int> &prices) {
        int n = prices.size();
        vector<vector<int>> dp(2,  {0,-prices[0]});

//        dp[0][1]=-prices[0];
//        dp[1][0]=0;
//        dp[1][1]=-prices[0];
        for (int i = 1; i < n; ++i) {
            dp[1][0]=max(dp[1][0],dp[1][1]+prices[i]);
            dp[1][1]=max(dp[1][1],dp[0][0]-prices[i]);
            dp[0][0]=max(dp[0][0],dp[0][1]+prices[i]);
            dp[0][1]=max(dp[0][1],-prices[i]);
        }
        return dp[1][0];
    }
};

int main() {
    Solution solution;
    vector<int> nums{3, 3, 5, 0, 0, 3, 1, 4};
    int outcome = solution.maxProfit3(nums);
    cout << outcome << endl;
    return 0;
}

