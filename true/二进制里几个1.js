
console.log(countBinaryOne(9))

function countBinaryOne(a) {
    // a=parseInt(a.toString(),2)
    a = parseInt(a.toString(2),2);
    let count=0;
    while (a){
        a&=(a-1);
        count++
    }
    return count;
}