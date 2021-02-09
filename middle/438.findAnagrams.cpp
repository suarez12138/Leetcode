#include <iostream>
#include <vector>
#include <unordered_map>


using namespace std;

class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        vector<int> outcome;

        unordered_map<char, int> pp;
        unordered_map<char, int> ss;
        int left = 0;
        int right = p.size();
        int match = 0;

        for (int i = 0; i < right; i++) {
            pp[p[i]]++;
        }
        int size = pp.size();

        for (int i = 0; i < right; i++) {
            ss[s[i]]++;
            if (ss[s[i]] == pp[s[i]]) {
                match++;
            }
        }
        while (right <= s.size()) {
            if (match == size)
                outcome.push_back(left);

            if (ss[s[left]] == pp[s[left]])
                match--;

            ss[s[left]]--;
            left++;
            right++;
            ss[s[right - 1]]++;
            if (right <= s.size() && ss[s[right - 1]] == pp[s[right - 1]]) {
                match++;
            }
        }
        return outcome;
    }
};

int main() {
    Solution solution;
    vector<int> outcome = solution.findAnagrams("baa", "aa");
    std::cout << "Hello, World!" << std::endl;
    return 0;
}