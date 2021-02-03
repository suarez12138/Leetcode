//
// Created by 99681 on 2021/2/3.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int maxProfit3(vector<int> &prices, int fee) {
        int n = prices.size();
        int dp_i0 = 0, dp_i1 = - prices[0];
        for (int i = 1; i < n; ++i) {
            int tmp = dp_i0;
            dp_i0 = max(dp_i0, dp_i1 + prices[i] - fee);
            dp_i1 = max(dp_i1, tmp - prices[i]);
        }
        return dp_i0;
    }
};

int main() {
    Solution solution;
    vector<int> nums{1, 3, 2, 8, 4, 9};
    int outcome = solution.maxProfit3(nums, 2);
    cout << outcome << endl;
    return 0;
}

