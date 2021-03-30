/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(!num){
        return '0';
    }
    let res = '';
    const tmp = '0123456789abcdef';
    while(num != 0 && res.length < 8){
        res = tmp[num & 15] + res;
        num >>= 4;
    }
    return res;


    // if(num<0)num=2**31+num+2**31;
    // let str="";
    // while(num){
    //     let now=num%16;
    //     if(now>9){
    //         switch(now){
    //             case 10:
    //                 now="a";
    //                 break;
    //             case 11:
    //                 now="b";
    //                 break;
    //             case 12:
    //                 now="c";
    //                 break;
    //             case 13:
    //                 now="d";
    //                 break;
    //             case 14:
    //                 now="e";
    //                 break;
    //             case 15:
    //                 now="f";
    //         }
    //     }
    //     str=now+str;
    //     num=num>>4;
    // }
    return str;
};