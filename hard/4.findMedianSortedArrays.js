var findMedianSortedArrays = function (nums1, nums2) {
    let length = nums1.length + nums2.length;
    if (length % 2 === 0) {
        return (calculate(nums1, nums2, (length >> 1)) + calculate(nums1, nums2, (length >> 1) + 1)) / 2;
    } else {
        return calculate(nums1, nums2, (length >> 1) + 1);
    }
};

var calculate = function (nums1, nums2, index) {
    let l1 = nums1.length;
    let l2 = nums2.length;
    let point1 = 0, point2 = 0;

    while (true) {
        if (point1 === l1) {
            return nums2[point2 + index - 1];
        }
        if (point2 === l2) {
            return nums1[point1 + index - 1];
        }
        if (index === 1) {
            return Math.min(nums1[point1], nums2[point2]);
        }
        let newp1 = Math.min(point1 + (index >> 1) - 1, l1 - 1);
        let newp2 = Math.min(point2 + (index >> 1) - 1, l2 - 1);
        let v1 = nums1[newp1];
        let v2 = nums2[newp2];
        if (v1 < v2) {
            index -= (newp1 - point1 + 1);
            point1 = newp1 + 1;
        } else {
            index -= (newp2 - point2 + 1);
            point2 = newp2 + 1;
        }
    }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]))