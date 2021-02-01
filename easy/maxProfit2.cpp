//
// Created by 99681 on 2021/2/1.
//
#include <iostream>
#include <vector>
#include <unordered_map>


using namespace std;

class Solution {
public:
    int maxProfit2(vector<int> &prices) {
        int n = prices.size();
        if (n == 1) return 0;
        if (n == 2) return max(0, prices[1] - prices[0]);
        int result = 0;
        int buy;
        if (prices[0] < prices[1]) buy = prices[0];
        for (int i = 1; i < n - 1; ++i) {
            if (prices[i - 1] < prices[i] && prices[i] >= prices[i + 1]) { result += prices[i] - buy; }
            else if (prices[i - 1] >= prices[i] && prices[i] < prices[i + 1]) { buy = prices[i]; }
        }
        if (prices[n - 2] < prices[n - 1])result += prices[n - 1] - buy;
        return result;
    }
};

int main() {
    Solution solution;
    vector<int> nums{2,2,5};
    int outcome = solution.maxProfit2(nums);
    cout << outcome << endl;
    return 0;
}
