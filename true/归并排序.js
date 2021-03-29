function mergesort(arr, l, r) {
    if (l < r) {
        let mid = l + ((r - l) >> 1);
        mergesort(arr, l, mid);
        mergesort(arr, mid + 1, r);
        merge(arr, l, r, mid)
    }
}


function merge(arr, l, r, mid) {
    let tmpl = l, tmpr = mid + 1, tmp = new Array(r - l + 1), count = 0;
    while (tmpl <= mid && tmpr <= r) {
        if (arr[tmpl] < arr[tmpr]) {
            tmp[count++] = arr[tmpl++];
        } else {
            tmp[count++] = arr[tmpr++];
        }
    }
    while (tmpr <= r) tmp[count++] = arr[tmpr++];
    while (tmpl <= mid) tmp[count++] = arr[tmpl++];
    for (let i = 0; i < tmp.length; i++) {
        arr[l + i] = tmp[i];
    }
}


let arr = [3, 2, 5, 3, 4, 6, 4, 2, 1, 6, 4];

console.log(mergesort2(arr, 0, arr.length - 1));
console.log(arr);


function mergesort2(arr, l, r) {
    if (l < r) {
        let mid = l + ((r - l) >> 1);
        mergesort2(arr, l, mid);
        mergesort2(arr, mid + 1, r);
        merge2(arr, l, r, mid);

    }
}

function merge2(arr, l, r, mid) {
    let tmpl = l, tmpr = mid + 1, tmp = new Array(r - l + 1), point = 0;
    while (tmpl <= mid && tmpr <= r) {
        if (arr[tmpl] < arr[tmpr]) tmp[point++] = arr[tmpl++];
        else tmp[point++] = arr[tmpr++];
    }
    while (tmpl <= mid) tmp[point++] = arr[tmpl++];
    while (tmpr <= r) tmp[point++] = arr[tmpr++];
    for (let i = l; i <= r; i++) {
        arr[i] = tmp[i - l];
    }
}
