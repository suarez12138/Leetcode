// 给定一个IP地址如127.0.0.1，将其转换为十进制的整数

// function translate(ip) {
//     let arr = ip.split(".").map(item => parseInt(item).toString(2));
//     // arr = arr.map(item => item.toString(2));
//     let res = '';
//     for (e of arr) {
//         while (e.length < 8) {
//             e = '0' + e;
//         }
//         res += e;
//     }
//     // console.log(parseInt(res,2))
//     return parseInt(res, 2);
// }

console.log(translate("127.0.0.1"))

function translate(ip){
    let arr=ip.split('.').map(e=>parseInt(e).toString(2));
    for (let i=0;i<4;i++){
        while (arr[i].length<8)
            arr[i]='0'+arr[i];
    }
    console.log(arr.join('').length);

    return parseInt(arr.join(''),2);

}