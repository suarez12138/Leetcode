var myAtoi = function (s) {
    let res = s.parseInt(s);
    if (isNaN(res)) {
        return 0;
    } else if (res > 2 ** 31 - 1) {
        return 2 ** 31 - 1;
    } else if (res < -2 ** 31 ) {
        return -2 ** 31 ;
    }else return res;
};

