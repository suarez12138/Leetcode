//
// Created by 99681 on 2021/2/4.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    bool isMatch(string s, string p) {
        int ssize = s.size();
        int psize = p.size();

        vector<vector<bool>> judge(ssize + 1, (vector<bool>(psize + 1, false)));
        judge[0][0] = true;

        for (int i = 0; i < ssize + 1; ++i) {
            for (int j = 1; j < psize + 1; ++j) {
                if (p[j - 1] == '*') {
                    judge[i][j] = judge[i][j - 2];
                    if (i > 0 && (p[j - 2] == '.' || p[j - 2] == s[i - 1])) {
                        judge[i][j] = judge[i][j] || judge[i - 1][j];
                    }

                } else if (i > 0 && (p[j - 1] == '.' || p[j - 1] == s[i - 1])) {
                    judge[i][j] = judge[i - 1][j - 1];
                }
            }
        }

//        for (int k = 0; k < psize; ++k) {
//            if (s[0] == p[k] || p[k] == '.' || (k + 1 < psize && p[k + 1] == '*'))judge[0][k] = true;
//        }
//        for (int i = 1; i < ssize; ++i) {
//            for (int j = 1; j < psize; ++j) {
//                if (judge[i - 1][j - 1] &&
//                    (s[i] == p[j] || p[j] == '.' || (p[j] == '*' && (p[j - 1] == s[i] || p[j - 1] == '.'))))
//                    judge[i][j] = true;
//                else if ((p[j] == '*' && p[j - 1] == s[i]) && judge[i - 1][j])
//                    judge[i][j] = true;
//                else if (j + 1 < psize && p[j + 1] == '*')
//                    judge[i][j] = true;
//            }
//        }
        return judge[ssize][psize];
    }
};


int main() {
    Solution solution;
    bool outcome = solution.isMatch("aab", "c*k*a*o*b");
    cout << outcome << endl;
    return 0;
}