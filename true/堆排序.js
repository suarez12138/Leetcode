function heapsort(arr) {
    let n = arr.length;
    for (let i = n >> 1 - 1; i >= 0; i--) {
        adjust(arr, i, n);
    }
    for (let i = n - 1; i >= 0; i--) {
        swap(arr, 0, i);
        adjust(arr, 0, i);
    }
    return arr;
}

function adjust(arr, i, len) {
    let tmp = arr[i];
    for (let j = 2 * i + 1; j < len; j = 2 * j + 1) {
        if (j+1<len&&arr[j]<arr[j+1])j++;
        if (arr[j]>tmp){
            swap(arr, i, j);
            i=j;
        }else break;
    }
}

function swap(arr,i,j){
    [arr[i],arr[j]]=[arr[j],arr[i]];
}

let arr = [3, 2, 5, 3, 4, 6, 4, 2, 1, 6, 4];

console.log(heapsort(arr));
console.log(arr);