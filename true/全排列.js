// 请实现:指定一个输入字符串，输出一个数组列出该字符串的所有排列，没有顺序要求， 需要去掉重复的。
function solution(string) {
// 请在这里根据要求补充函数体代码
    let res = [], n = string.length;
    string = string.split("");
    quan(0, string);

    function quan(count, str) {
        if (count === n) {
            res.push(str.slice());
            return;
        }
        for (let i = count; i < n; i++) {
            [str[i], str[count]] = [str[count], str[i]];
            quan(count + 1, str);
            [str[i], str[count]] = [str[count], str[i]];
        }
    }

    let ans = [];
    for (e of res)
        ans.push(e.join(""));
    ans = Array.from(new Set(ans));

    return ans;
}

// 需要通过下面的测试用例:
//     solution("a") => ["a"]
// solution("ab") => ["ab", "ba"]
// solution("aabb") => ["aabb", "abab", "abba", "baab", "baba", "bbaa"]

// console.log(solution("a"));
// console.log(solution("ab"));
console.log(solution("aabb"));
