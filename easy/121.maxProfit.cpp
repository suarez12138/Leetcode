//
// Created by 99681 on 2021/2/1.
//


#include <iostream>
#include <vector>
#include <unordered_map>


using namespace std;

class Solution {
public:
    int maxProfit(vector<int> &prices) {
        int n = prices.size();
        int min = prices[0];
        int result = 0;
        for (int i = 1; i < n; ++i) {
            if (prices[i] < min) {
                min = prices[i];
            } else if (prices[i] - min > result) {
                result = prices[i] - min;
            }
        }
        return result;
    }
};

int main() {
    Solution solution;
    vector<int> nums{7, 1, 5, 3, 6, 4};
    int outcome = solution.maxProfit(nums);
    cout << outcome << endl;
    return 0;
}
