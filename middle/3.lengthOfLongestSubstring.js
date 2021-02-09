var 3 = function (s) {
    let right = 0;
    let map = new Set();
    let ans = 0;
    for (let left = 0; left < s.length; left++) {
        while (right < s.length && !map.has(s.charAt(right))) {
            map.add(s.charAt(right));
            right++;
        }
        ans = Math.max(ans, right - left)
        map.delete(s.charAt(left))
    }
    return ans;
};

// console.log(Number(" 1234"))
// console.log(Number("1234test"))
// console.log(parseInt("1234test"))

console.log(3("bbasfadsbbb"))