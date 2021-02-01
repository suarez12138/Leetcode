//
// Created by 99681 on 2021/1/16.
//

#include <iostream>
#include <vector>


using namespace std;

class Solution {
public:
    int minDistance(string word1, string word2) {
        int point1 = word1.length();
        int point2 = word2.length();

        int cache[point1 + 1][point2 + 1];
        for (int i = 0; i < point1 + 1; ++i) {
            cache[i][0] = i;
        }

        for (int i = 0; i < point2 + 1; ++i) {
            cache[0][i] = i;
        }

        for (int i = 1; i < point1 + 1; ++i) {
            for (int j = 1; j < point2 + 1; ++j) {
                if (word1[i - 1] == word2[j - 1])
                    cache[i][j] = cache[i - 1][j - 1];

                else {
                    int min = cache[i - 1][j - 1];
                    if (min > cache[i][j - 1])
                        min = cache[i][j - 1];
                    if (min > cache[i - 1][j])
                        min = cache[i - 1][j];
                    cache[i][j] = min + 1;
                }
            }
        }
        return cache[point1][point2];
    }
};

int main() {
    Solution solution;
    int outcome = solution.minDistance("intention", "execution");
    cout << outcome << endl;
    return 0;
}