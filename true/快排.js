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


console.log(quick2(arr, 0, arr.length - 1));
console.log(arr);


function quicksort(arr, l, r) {
    if (l < r) {
        let tmpl = l, tmpr = r;
        let mark = arr[l];
        while (tmpl < tmpr) {
            while (tmpl < tmpr && arr[tmpr] > mark) tmpr--;
            if (tmpl < tmpr)
                arr[tmpl++] = arr[tmpr];
            while (tmpl < tmpr && mark > arr[tmpl]) tmpl++;
            if (tmpl < tmpr)
                arr[tmpr--] = arr[tmpl];
        }
        arr[tmpl] = mark;
        quicksort(arr, l, tmpl - 1);
        quicksort(arr, tmpl + 1, r);
    }
}


function quick2(arr, l, r) {
    if (r > l) {
        let tmpl = l, tmpr = r, mark = arr[l];
        while (tmpl < tmpr) {
            while (tmpl < tmpr && arr[tmpr] > mark) tmpr--;
            if (tmpl < tmpr) arr[tmpl++] = arr[tmpr];
            while (tmpl < tmpr && arr[tmpl] < mark) tmpl++;
            if (tmpl < tmpr) arr[tmpr--] = arr[tmpl];
        }
        arr[tmpl] = mark;
        quick2(arr, l, tmpl - 1);
        quick2(arr, tmpl + 1, r);
    }
}


