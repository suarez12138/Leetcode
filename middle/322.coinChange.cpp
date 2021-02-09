#include <iostream>
#include <vector>
#include <unordered_map>


using namespace std;

class Solution {
public:
    int coinChange(vector<int> &coins, int amount) {
        vector<int> test(amount + 1, amount + 1);
        test[0] = 0;
        for (int i = 0; i < amount + 1; i++) {
            for (int e :coins) {
                if (i >= e) test[i] = min(test[i], 1 + test[i - e]);
            }
        }
        return (test[amount] == amount + 1) ? -1 : test[amount];
    }
};