function add(s1,s2){
    let n1=s1.length-1,n2=s2.length-1,carry=0;
    let res=[];
    while (n1>=0&&n2>=0){
        let t1=0,t2=0;
        if (n1>=0)t1=s1[n1--]-'0';
        if (n2>=0)t2=s2.charAt(n2--)-'0';
        res.unshift((t1+t2+carry)%10);
        carry=Math.floor((t1+t2+carry)/10);
    }
    if (carry)res.unshift(carry);
    return res.join('')
}

console.log(add("1", "9"))