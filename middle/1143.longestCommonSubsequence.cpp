//
// Created by 99681 on 2021/2/5.
//

//
// Created by 99681 on 2021/1/27.
//

#include <iostream>
#include <vector>
#include <unordered_map>


using namespace std;

class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        int s1 = text1.size();
        int s2 = text2.size();
        vector<vector<int >> dp(s1 + 1, vector<int>(s2 + 1, 0));

        for (int i = 1; i < s1 + 1; ++i) {
            for (int j = 1; j < s2 + 1; ++j) {
                if (text1[i - 1] == text2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                }
                dp[i][j] = max(dp[i][j], max(dp[i - 1][j], dp[i][j - 1]));
            }
        }
        return dp[s1][s2];
    }
};

int main() {
    Solution solution;
    int outcome = solution.longestCommonSubsequence("abcde", "ace");
    cout << outcome << endl;
    return 0;
}
