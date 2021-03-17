var generateParenthesis = function (n) {
    let ans = [];
    gen(0, 0, "")

    function gen(l, r, s) {
        if (l === n && r === n) {
            ans.push(s);
            return;
        }
        if (l < n) {
            gen(l + 1, r, s+'(');
        }
        if (r < l) {
            gen(l, r + 1, s+')');
        }
    }
    return ans;
}

console.log(generateParenthesis(3))