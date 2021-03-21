let arr = [3, 2, 5, 3, 4, 6, 4, 2, 1, 6, 4];


function quick(arr, l, r) {
    if (l < r) {
        let tmpl = l, tmpr = r, mark = l;
        let tmp = arr[mark];
        while (tmpl < tmpr) {
            while (tmpl < tmpr && arr[tmpr] >= tmp)
                tmpr--;
            if (tmpl < tmpr)
                arr[tmpl++] = arr[tmpr];
            while (tmpl < tmpr && arr[tmpl] < tmp)
                tmpl++;
            if (tmpl < tmpr)
                arr[tmpr--] = arr[tmpl];
        }
        arr[tmpl] = tmp;
        quick(arr, l, tmpl - 1);
        quick(arr, tmpl + 1, r);
    }
}


console.log(quick(arr, 0, arr.length - 1));
console.log(arr);
