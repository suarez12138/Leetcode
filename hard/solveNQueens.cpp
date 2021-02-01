//
// Created by 99681 on 2021/2/1.
//
class Solution {
public:

    vector <vector<string>> outcome;

    vector <vector<string>> solveNQueens(int n) {
        vector <string> board(n, string(n, '.'));
        track(board, 0);
        return outcome;
    }

    void track(vector <string> board, int row) {
        if (row == board.size()) {
            outcome.push_back(board);
            return;
        }

        for (int column = 0; column < board.size(); column++) {
            if (valid(board, row, column)) {
                board[row][column] = 'Q';
                track(board, row + 1);
                board[row][column] = '.';
            }
        }
    }

    bool valid(vector <string> board, int row, int column) {

        for (int i = 0; i < board.size(); i++) {
            if (board[i][column] == 'Q')
                return false;
        }
        return true;
    }
};