//
// Created by 99681 on 2021/1/30.
//


#include <iostream>
#include <vector>
#include <unordered_map>


using namespace std;

class Solution {
public:
    bool PredictTheWinner(vector<int> &nums) {
        int size = nums.size();
        vector<vector<int>> cache(size, vector<int>(size, 0));
        for (int i = 0; i < size; ++i) {
            cache[i][i] = nums[i];
        }
        for (int i = size - 1; i >= 0; --i) {
            for (int j = i + 1; j < size; ++j) {
                cache[i][j] = max(nums[i] - cache[i + 1][j], nums[j] - cache[i][j - 1]);
            }
        }
        return cache[0][size-1]>=0;
    }
};

int main() {
    Solution solution;
    vector<int> nums{1, 5, 233, 7};
    int outcome = solution.PredictTheWinner(nums);
    cout << outcome << endl;
    return 0;
}
