//
// Created by 99681 on 2021/1/27.
//

#include <iostream>
#include <vector>
#include <unordered_map>


using namespace std;

class Solution {
public:
    int longestPalindromeSubseq(string s) {
        int size = s.size();
        vector<vector<int>> cache(size, vector<int>(size, 0));
        for (int i = 0; i < size; ++i) {
            cache[i][i] = 1;
        }
        for (int j = size - 1; j >= 0; --j) {
            for (int i = j + 1; i < size; ++i) {
                if (s[i] == s[j])cache[j][i] = cache[j + 1][i - 1] + 2;
                else cache[j][i] = max(cache[j + 1][i], cache[j][i - 1]);
            }
        }
        return cache[0][size - 1];
    }
};

int main() {
    Solution solution;
    int outcome = solution.longestPalindromeSubseq("aaaba");
    cout << outcome << endl;
    return 0;
}
