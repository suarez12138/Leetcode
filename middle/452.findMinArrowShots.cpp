//
// Created by 99681 on 2021/1/31.
//


class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {
        if (points.empty())return 0;

        sort(points.begin(), points.end(), [](const auto &u, const auto &v) {
            return u[1] < v[1];
        });

        int size = points.size();
        int current = points[0][1];
        int count = 1;
        for (int i = 1; i < size; ++i) {
            if (points[i][0] > current) {
                current = points[i][1];
                count++;
            }
        }
        return count;
    }
};

int main() {
    Solution solution;
    vector<vector<int>> nums{{1, 2},
                             {2, 3},
                             {3, 4},
                             {1, 3}};
    int outcome = solution.findMinArrowShots(nums);
    cout << outcome << endl;
    return 0;
}