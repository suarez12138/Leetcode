var maxArea = function (height) {
    let n = height.length;
    let l = 0, r = n - 1, res = 0;
    while (l < r) {
        res = Math.max(res, (r - l) * Math.min(height[r], height[l]))
        if (height[r] < height[l]) r--;
        else l++;
    }
    return res;


    // let n = height.length;
    // let  res = 0;
    // for (let i = 0; i < n - 1; i++) {
    //     for (let j = i + 1; j < n; j++) {
    //         let tmp = (j - i) * Math.min(height[i], height[j]);
    //         res = Math.max(res, tmp);
    //     }
    // }
    // return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))