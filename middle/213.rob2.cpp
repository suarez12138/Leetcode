//
// Created by 99681 on 2021/2/4.
//


#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:

    int rob1(vector<int> &nums, int start, int end) {
        if (!(end - start))
            return 0;
        vector<vector<int>> dp(2, {0, 0});
        dp[start][1] = nums[start];
        for (int i = start + 1; i < end; ++i) {
            dp[i % 2][0] = max(dp[(i + 1) % 2][0], dp[(i + 1) % 2][1]);
            dp[i % 2][1] = dp[(i + 1) % 2][0] + nums[i];
        }
        return max(dp[(end - 1) % 2][0], dp[(end - 1) % 2][1]);
    }

    int rob2(vector<int> &nums) {
        int n = nums.size();
        if (n == 1)
            return nums[0];
        return max(rob1(nums, 0, n - 1), rob1(nums, 1, n));


//        if (n==1)
//            return nums[0];
//        vector<vector<int>> dp(2, vector<int>(2, 0));
//        vector<vector<bool >> mark(2, vector<bool>(2, false));
//        dp[0][1] = nums[0];
//        mark[0][1] = true;
//        for (int i = 1; i < n; ++i) {
//            if (dp[(i + 1) % 2][0] < dp[(i + 1) % 2][1] ||
//                (dp[(i + 1) % 2][0] == dp[(i + 1) % 2][1] && !mark[(i + 1) % 2][1])) {
//                dp[i % 2][0] = dp[(i + 1) % 2][1];
//                mark[i % 2][0] = mark[(i + 1) % 2][1];
//            } else {
//                dp[i % 2][0] = dp[(i + 1) % 2][0];
//                mark[i % 2][0] = mark[(i + 1) % 2][0];
//            }
//            dp[i % 2][1] = dp[(i + 1) % 2][0] + nums[i];
//            mark[i % 2][1] = mark[(i + 1) % 2][0] ;
//
//        }
//        if (mark[(n - 1) % 2][1]) dp[(n - 1) % 2][1] -= nums[0];
//        return max(dp[(n - 1) % 2][0], dp[(n - 1) % 2][1]);
    }
};

int main() {
    Solution solution;
    vector<int> nums{2, 2, 4, 3, 2, 5};
    int outcome = solution.rob2(nums);
    cout << outcome << endl;
    return 0;
}

