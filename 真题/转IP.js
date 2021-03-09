// 给定一个IP地址如127.0.0.1，将其转换为十进制的整数

function translate(ip){
    let arr=ip.split(".").map(item=>parseInt(item));
    arr=arr.map(item=>item.toString(2))
    let res='';
    for(e of arr){
        while(e.length<9){
            e='0'+e;
        }
        res+=e;
    }
    // console.log(parseInt(res,2))
    return parseInt(res,2);
}

console.log(translate("127.0.0.1"))