//
// Created by 99681 on 2021/2/1.
//

#include <iostream>
#include <vector>
#include <unordered_map>


using namespace std;

class Solution {
public:
    int maxProfit5(vector<int> &prices) {
        int n = prices.size();
        int dp_i0 = 0, dp_i1 = INT32_MIN;
        int before = 0;
        for (int i = 0; i < n; ++i) {
            int tmp = dp_i0;
            dp_i0 = max(dp_i0, dp_i1 + prices[i]);
            dp_i1 = max(dp_i1, before - prices[i]);
            before = tmp;
        }
        return dp_i0;


//        int n = prices.size();
//        if (n == 1 || n == 0) return 0;
//        if (n == 2) return max(0, prices[1] - prices[0]);
//        int result = 0;
//        int buy;
//        bool cold = false, aftercold = false;
//        if (prices[0] < prices[1])
//            buy = prices[0];
//
//
//        for (int i = 1; i < n - 1; ++i) {
//            if (!aftercold) {
//                if (prices[i - 1] < prices[i] && prices[i] >= prices[i + 1]) {
//                    result += prices[i] - buy;
//                    cold = true;
//                    continue;
//                } else if (prices[i - 1] >= prices[i] && prices[i] < prices[i + 1]) {
//                    if (cold) {
//                        aftercold = true;
//                        continue;
//                    }
//                    buy = prices[i];
//
//                }
//            } else if (prices[i - 1] <= prices[i] && prices[i] < prices[i + 1]) buy = prices[i];
//
//
//            cold = false;
//            aftercold = false;
//        }
//        if (prices[n - 2] < prices[n - 1])result += prices[n - 1] - buy;
//        return result;
    }
};

int main() {
    Solution solution;
    vector<int> nums{6, 1, 3, 2, 4, 7};
    int outcome = solution.maxProfit5(nums);
    cout << outcome << endl;
    return 0;
}
