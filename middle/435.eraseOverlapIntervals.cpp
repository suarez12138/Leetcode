//
// Created by 99681 on 2021/1/31.
//


#include <iostream>
#include <vector>
#include <algorithm>


using namespace std;

class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>> &intervals) {
        if (intervals.empty())return 0;

        sort(intervals.begin(), intervals.end(), [](const auto &u, const auto &v) {
            return u[1] < v[1];
        });

        int size = intervals.size();
        int current = intervals[0][1];
        int count = 1;
        for (int i = 1; i < size; ++i) {
            if (intervals[i][0] >= current) {
                current = intervals[i][1];
                count++;
            }
        }
        return size - count;
    }
};

int main() {
    Solution solution;
    vector<vector<int>> nums{{1, 2},
                             {2, 3},
                             {3, 4},
                             {1, 3}};
    int outcome = solution.eraseOverlapIntervals(nums);
    cout << outcome << endl;
    return 0;
}