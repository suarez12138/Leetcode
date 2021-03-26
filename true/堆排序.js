function heapsort(arr) {
    let n = arr.length;
    for (let i = (n >> 1) - 1; i >= 0; i--) {
        adjust(arr, i, n);
    }
    for (let i = n - 1; i >= 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]];
        adjust(arr, 0, i);
    }
    return arr;
}

function adjust(arr, i, len) {
    let tmp = arr[i];
    for (let j = 2 * i + 1; j < len; j = 2 * j + 1) {
        if (j + 1 < len && arr[j] < arr[j + 1]) j++;
        if (arr[j] > tmp) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i = j;
        } else break;
    }
}


let arr = [3, 2, 5, 3, 4, 6, 4, 2, 1, 6, 4];

console.log(heapsort2(arr));


function heapsort2(arr) {
    let n = arr.length;
    for (let i = (n >> 1) - 1; i >= 0; i--) {
        // adjust2(arr, 0, i);
        adjust2(arr, i, n);
    }

    for (let i = n - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        adjust2(arr, 0, i);
    }
    return arr;
}

function adjust2(arr, l, r) {
    let tmp = 2 * l;
    while (tmp < r) {
        if (tmp + 1 < r && arr[tmp] < arr[tmp + 1]) tmp++;
        if (arr[l] < arr[tmp]) {
            [arr[l], arr[tmp]] = [arr[tmp], arr[l]];
            l = tmp;
            tmp = 2 * l;
        } else break;
    }
}
