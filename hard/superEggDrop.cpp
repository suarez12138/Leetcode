//
// Created by 99681 on 2021/1/20.
//

#include <iostream>
#include <vector>
#include <unordered_map>


using namespace std;

class Solution {
public:
    unordered_map<int, int> cache;

    int superEggDrop(int K, int N) {
        if (K == 1)return N;
        if (N == 0)return 0;
        if (cache.find(K + 100 * N) == cache.end()) {
            int result;
            int left = 1, right = N;
            while (left + 1 < right) {
                int mid = left + (right - left) / 2;
                int p1 = superEggDrop(K - 1, mid - 1);
                int p2 = superEggDrop(K, N - mid);

                if (p1 < p2)left = mid;
                else if (p1 > p2)right = mid;
                else left = right = mid;
            }
            result = min(max(superEggDrop(K - 1, left - 1), superEggDrop(K, N - left)),
                         max(superEggDrop(K - 1, right - 1), superEggDrop(K, N - right))) + 1;

            cache[K + 100 * N] = result;
        }
        return cache[K + 100 * N];
    }
};

int main() {
    Solution solution;
    int outcome = solution.superEggDrop(2,2);
    cout << outcome << endl;
    return 0;
}